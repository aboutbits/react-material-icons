import React from 'react'
import { IconProps } from './types'

export const IconMarkdownPasteSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120v-360h400v360h-80v-280h-80v200h-80v-200h-80v280h-80Zm-360 0v-720h247q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v280h-80v-200h-80v120H280v-120h-80v560h200v80H120Zm360-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
  </svg>
)
