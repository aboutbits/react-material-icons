import React from 'react'
import { IconProps } from './types.js'

export const IconGasMeterSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-720h200v-80h80v80h80v-80h80v80h200v720H160Zm160-480h320v-80H320v80Zm160 320q42 0 71-28.5t29-69.5q0-33-19-56.5T480-490q-63 72-81.5 96T380-338q0 41 29 69.5t71 28.5Z" />
  </svg>
)
