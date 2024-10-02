import React from 'react'
import { IconProps } from './types'

export const IconBackspaceSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56ZM320-160 80-480l240-320h560v640H320ZM180-480l180 240h440v-480H360L180-480Zm310 0Z" />
  </svg>
)
