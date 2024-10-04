import React from 'react'
import { IconProps } from './types.js'

export const IconGifBoxSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm180-280h120v-80h-40v40h-40v-80h80v-40H300v160Zm160 0h40v-160h-40v160Zm80 0h40v-60h60v-40h-60v-20h80v-40H540v160Z" />
  </svg>
)
