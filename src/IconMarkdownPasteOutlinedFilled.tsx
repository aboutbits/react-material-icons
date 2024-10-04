import React from 'react'
import { IconProps } from './types.js'

export const IconMarkdownPasteOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120v-280q0-33 23.5-56.5T560-480h240q33 0 56.5 23.5T880-400v280h-80v-280h-80v200h-80v-200h-80v280h-80Zm-280 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200h-80v-200h-80v120H280v-120h-80v560h200v80H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
  </svg>
)