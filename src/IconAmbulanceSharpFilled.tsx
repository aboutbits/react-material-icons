import React from 'react'
import { IconProps } from './types'

const IconAmbulanceSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-800v-160h80v160h-80Zm-177 57L143-863l57-57 120 120-57 57Zm-23 503h160v-80H240v80Zm320 0h160v-80H560v80Zm131-270 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520-600q0-83 58.5-141.5T720-800q83 0 141.5 58.5T920-600q0 83-58.5 141.5T720-400ZM120-40v-360l98-280h142v-80h131q-24 34-37.5 74.5T440-600H274l-59 160h276q40 57 100 88.5T720-320q32 0 61.5-6.5T840-347v307H720v-80H240v80H120Z" />
  </svg>
)

export { IconAmbulanceSharpFilled as default }
