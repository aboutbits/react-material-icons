import React from 'react'
import { IconProps } from './types'

const IconUnarchiveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-560 320-400l56 56 64-64v168h80v-168l64 64 56-56-160-160Zm-280-80v440h560v-440H200Zm-80 520v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm264 300Z" />
  </svg>
)

export { IconUnarchiveSharp as default }
