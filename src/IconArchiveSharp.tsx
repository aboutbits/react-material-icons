import React from 'react'
import { IconProps } from './types'

const IconArchiveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm-80 520v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm264 300Z" />
  </svg>
)

export { IconArchiveSharp as default }
