const fs = require('fs')
const path = require('path')
const axios = require('axios')

const GOOGLE_FONTS_URL =
  'https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true'
const ICON_FAMILIES = [
  { id: 'materialsymbolsoutlined', postfix: 'Outlined' },
  { id: 'materialsymbolsrounded', postfix: 'Rounded' },
  { id: 'materialsymbolssharp', postfix: 'Sharp' },
]

const getIncludedFamilies = (families) => {
  const notIncludedFamilies = families.map((family) =>
    family.replace(/\s+/g, '').toLowerCase(),
  )
  return ICON_FAMILIES.filter(
    (family) => !notIncludedFamilies.includes(family.id),
  )
}

const ignoredIcons = [
  'addchart', // This icon exists twice 'addchart' and 'add_chart'. That's why we decide to only use one version, so that we don't get naming collisions.
]

;(async () => {
  generatePropsFile()

  const res = await axios.get(GOOGLE_FONTS_URL)

  // remove )]}' from the response
  const data = res.data.substring(4)
  const icons = await JSON.parse(data)

  for (let i = 0; i < icons.icons.length; i++) {
    if (ignoredIcons.includes(icons.icons[i].name)) continue

    await generateComponentsForAllFamilies(icons.icons[i])
  }
})()

function generatePropsFile() {
  const typesFile = `
    import React from 'react'
    export interface IconProps extends React.SVGProps<SVGSVGElement> {
        title?: string
    }
    `

  fs.writeFileSync(path.join(__dirname, 'src', 'types.ts'), typesFile)
}

async function generateComponentsForAllFamilies(icon) {
  const families = getIncludedFamilies(icon.unsupported_families)

  for (let i = 0; i < families.length; i++) {
    await generateComponent(icon, families[i])
  }
}

async function generateComponent(icon, family) {
  try {
    const name = formatName(icon.name, family.postfix)

    const svg = await downloadSVG(icon.name, family.id)

    console.log(`Downloading ${name}`)

    await fs.writeFileSync(
      path.join(__dirname, 'src', `${name}.tsx`),
      mapSVGToTemplate(name, svg),
    )
  } catch {
    console.log('Error generating component for', icon.name)
    //process.abort()
  }
}

function formatName(string, familyPostfix) {
  const formattedString = string
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    .replace(/ /g, '')

  return 'Icon' + formattedString + familyPostfix
}

async function downloadSVG(icon, familyId) {
  const svg = await axios
    .get(
      `https://fonts.gstatic.com/s/i/short-term/release/${familyId}/${icon}/default/24px.svg`,
    )
    .catch((err) => console.log(err))

  return svg.data
    .replace('height="24"', '')
    .replace('width="24"', '{...props}')
    .replace(/class/g, 'className')
    .replace(/enable-background/g, 'enableBackground')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-rule/g, 'fillRule')
    .replace('>', '>{props.title && <title>{props.title}</title>}')
    .replace(/style="enableBackground:(.*?);?"/g, 'enableBackground="$1"')
    .replace(/style="fill:(.*?);?"/g, 'fill="$1"')
    .replace(/xmlns:xlink/g, 'xmlnsXlink')
    .replace(/xlink:href/g, 'xlinkHref')
}

function mapSVGToTemplate(name, svg) {
  return `
    import React from 'react'
    import { IconProps } from './types'
    
    const ${name}: React.FC<IconProps> = ({ ...props }) => (
        ${svg}
    )
    
    export { ${name} as default } 
  `
}
