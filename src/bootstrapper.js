const fs = require('fs')
const path = require('path')
const axios = require('axios')

// Base url for icons
const iconURL = 'https://fonts.google.com/metadata/icons'

/**
 * Format name.
 * Covert from snake case to camel case and prevent numbers at the beginning
 *
 * @param string - String to format
 * @returns {string} - Formatted string
 */
function formatName(string) {
  const formattedString = string
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    .replace(/ /g, '')
  return 'Icon' + formattedString
}

/**
 * Setup the dist folder and some static files
 */
function setup() {
  // Create the dist folder
  fs.mkdirSync(path.join(__dirname, '..', 'dist'))

  // Create the components folder
  fs.mkdirSync(path.join(__dirname, '..', 'dist', 'components'))

  // Add the type declaration file to the components folder
  fs.writeFileSync(
    path.join(__dirname, '..', 'dist', 'components', 'types.d.ts'),
    '/// <reference types="react" />\nexport type IconProps = React.SVGProps<SVGSVGElement>\n'
  )

  // Add type file to the components folder
  fs.writeFileSync(
    path.join(__dirname, '..', 'dist', 'components', 'types.js'),
    '"use strict"\nexports.__esModule = true;'
  )
}

/**
 * Component template for functional Javascript react icon component
 *
 * @param name - Component name
 * @param svg - Icon SVG
 * @returns {string} - Component
 */
function componentJSTemplate(name, svg) {
  let component = "import React from 'react'\n"
  component += `const ${name} = (props) => (`
  component += svg + ')\n\n'
  component += `export { ${name} }`

  return component
}

/**
 * Generate Declaration file for icon components
 *
 * @param name - Icon name
 * @returns {string} - Declaration file template
 */
function componentDeclarationTemplate(name) {
  let declaration = "import React from 'react';\n"
  declaration += "import { IconProps } from './types';\n\n"
  declaration += `declare const ${name}: React.FC<IconProps>;\n\n`
  declaration += `export { ${name} };`

  return declaration;
}

/**
 * Generate React Icon components
 *
 * @param icon - Icon object
 */
function generateComponent(icon) {
  icon.forEach(async (c) => {
    const name = formatName(c.name)
    const svg = await getSVGFile(c.name, c.version)

    // Generate js component
    fs.writeFileSync(
      path.join(__dirname, '..', 'dist', 'components', `${name}.jsx`),
      componentJSTemplate(name, svg)
    )

    // Generate ts declaration file for js component
    fs.writeFileSync(
      path.join(__dirname, '..', 'dist', 'components', `${name}.d.ts`),
      componentDeclarationTemplate(name)
    )
  })
}

/**
 * Generate index tsx file for easy import
 *
 * @param icons - Array of icons
 */
function generateIndex(icons) {
  let imports = ''
  let exports = 'export {\n'

  icons.forEach((icon) => {
    const name = formatName(icon.name)
    imports += `import { ${name} } from './components/${name}'\n`
    exports += `  ${name},\n`
  })
  exports += '}'

  // Write js index
  fs.writeFileSync(
    path.join(__dirname, '..', 'dist', 'index.js'),
    imports + '\n' + exports
  )

  // Write ts index
  fs.writeFileSync(
    path.join(__dirname, '..', 'dist', 'index.d.ts'),
    imports + '\n' + exports
  )
}

/**
 * Get SVG data form google static fonts api
 *
 * @param icon - Icon name
 * @param version - Icon Version
 * @returns {Promise<any>} - SVG Data
 */
async function getSVGFile(icon, version) {
  const svg = await axios.get(
    `https://fonts.gstatic.com/s/i/materialicons/${icon}/v${version}/24px.svg`
  )

  return svg.data.replace('height="24"', '').replace('width="24"', '{...props}')
}

/**
 * Main function
 */
;(async function () {
  // Setup environment
  setup()

  // Get icon information from google fonts
  const res = await axios.get(iconURL)

  // remove )]}' from the response
  const data = res.data.substring(4)

  // Parse response from json to js object
  const icons = await JSON.parse(data)
  // Generate icon components and Index

  await generateComponent(icons.icons)
  await generateIndex(icons.icons)
})()
