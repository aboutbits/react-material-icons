import React from 'react'
import { IconProps } from './types'

const IconVideogameAssetOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-480q-25 0-42.5-17.5T640-540q0-25 17.5-42.5T700-600q25 0 42.5 17.5T760-540q0 25-17.5 42.5T700-480Zm-334 0Zm-86 120v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM160-240q-33 0-56.5-23.5T80-320v-320q0-34 24-57.5t58-23.5h77l81 81H160v320h366L55-791l57-57 736 736-57 57-185-185H160Zm720-80q0 26-14 46t-37 29l-29-29v-366H434l-80-80h446q33 0 56.5 23.5T880-640v320ZM617-457Z" />
  </svg>
)

export { IconVideogameAssetOffOutlined as default }
