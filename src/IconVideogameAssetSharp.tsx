import React from 'react'
import { IconProps } from './types.js'

export const IconVideogameAssetSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480h800v480H80Zm80-80h640v-320H160v320Zm120-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm300 0q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480ZM160-320v-320 320Z" />
  </svg>
)
