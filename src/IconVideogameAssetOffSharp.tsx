import React from 'react'
import { IconProps } from './types'

const IconVideogameAssetOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-480q-25 0-42.5-17.5T640-540q0-25 17.5-42.5T700-600q25 0 42.5 17.5T760-540q0 25-17.5 42.5T700-480Zm-334 0ZM80-240v-481h159l81 81H160v320h366L55-791l57-57 736 736-57 57-185-185H80Zm200-120v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm600 115h-51l-29-29v-366H434l-80-80h526v475ZM617-457Z" />
  </svg>
)

export { IconVideogameAssetOffSharp as default }
