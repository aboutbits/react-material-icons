import React from 'react'
import { IconProps } from './types.js'

export const IconAdOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-56-64-64H120v-607l-64-65 56-56 736 736-57 56ZM200-200h447L200-647v447Zm640-33-80-80v-327H433L233-840h607v607Z" />
  </svg>
)
