const fs = require('fs')
const path = require('path')
const axios = require('axios')

// This is the number of icons each thread will be downloading
const DOWNLOAD_CHUNK_SIZE = 500
const GOOGLE_FONTS_URL = 'https://fonts.google.com/metadata/icons'
const ICON_FAMILIES = [
  { id: 'materialicons', namePostfix: '' },
  { id: 'materialiconsoutlined', namePostfix: 'Outlined' },
  { id: 'materialiconsround', namePostfix: 'Round' },
  { id: 'materialiconssharp', namePostfix: 'Sharp' },
  { id: 'materialiconstwotone', namePostfix: 'TwoTone' },
]

function generateIconPropsFile() {
  const typesFile = `
    import React from 'react'
    export interface IconProps extends React.SVGProps<SVGSVGElement> {
        title?: string
    }
    `

  fs.writeFileSync(path.join(__dirname, 'src', 'types.ts'), typesFile)
}

function formatName(string, familyName) {
  const formattedString = string
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    .replace(/ /g, '')

  return 'Icon' + formattedString + familyName
}

function componentTemplate(name, svg) {
  return `
    import React from 'react'
    import { IconProps } from './types'
    
    const ${name}: React.FC<IconProps> = ({ ...props }) => (
        ${svg}
    )
    
    export { ${name} as default } 
  `
}

async function getSVGFile(icon, familyId, version) {
  const svg = await axios
    .get(
      `https://fonts.gstatic.com/s/i/${familyId}/${icon}/v${version}/24px.svg`
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

async function generateComponent(icons) {
  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]

    for (let j = 0; j < ICON_FAMILIES.length; j++) {
      const family = ICON_FAMILIES[j]

      const name = formatName(icon.name, family.namePostfix)
      const svg = await getSVGFile(icon.name, family.id, icon.version)

      console.log(`Downloading ${name} (${i + 1}/${icons.length})`)

      await fs.writeFileSync(
        path.join(__dirname, 'src', `${name}.tsx`),
        componentTemplate(name, svg)
      )
    }
  }
}

;(async () => {
  generateIconPropsFile()

  const res = await axios.get(GOOGLE_FONTS_URL)

  // remove )]}' from the response
  const data = res.data.substring(4)
  const icons = await JSON.parse(data)

  const iconChunks = new Array(
    Math.ceil(icons.icons.length / DOWNLOAD_CHUNK_SIZE)
  )
    .fill()
    .map(() => icons.icons.splice(0, DOWNLOAD_CHUNK_SIZE))

  for (let i = 0; i < iconChunks.length; i++) {
    generateComponent(iconChunks[i])
  }
})()
