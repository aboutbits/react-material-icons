import React from 'react'
import { IconProps } from './types'

export const IconAmbulanceSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-800v-160h80v160h-80Zm-177 57L143-863l57-57 120 120-57 57ZM120-40v-360l98-280h142v-80h131q-24 34-37.5 74.5T440-600H274l-59 160h276q17 24 38 44.5t47 35.5H200v160h560v-123q21-3 41-9t39-15v307H720v-80H240v80H120Zm120-200h160v-80H240v80Zm320 0h160v-80H560v80Zm-360 40v-160 160Zm491-310 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520-600q0-83 58.5-141.5T720-800q83 0 141.5 58.5T920-600q0 83-58.5 141.5T720-400Z" />
  </svg>
)
