import React from 'react'
import { IconProps } from './types.js'

export const IconMangaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm244-80h476v-439l-120 39-123-40-77 105-123 40v130l-76 105 43 60Z" />
  </svg>
)
