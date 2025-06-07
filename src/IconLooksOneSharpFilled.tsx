import React from 'react'
import { IconProps } from './types.js'

export const IconLooksOneSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280h80v-400H400v80h80v320Zm360 160H120v-720h720v720Z" />
  </svg>
)
