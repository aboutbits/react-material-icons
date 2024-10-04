import React from 'react'
import { IconProps } from './types.js'

export const IconGifBoxOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-400h40q17 0 28.5-11.5T420-440v-40h-40v40h-40v-80h80q0-17-11.5-28.5T380-560h-40q-17 0-28.5 11.5T300-520v80q0 17 11.5 28.5T340-400Zm120 0h40v-160h-40v160Zm80 0h40v-60h60v-40h-60v-20h80v-40H540v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)