import React from 'react'
import { IconProps } from './types'

export const IconLooksOneSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280h80v-400H400v80h80v320Zm360 160H120v-720h720v720Zm-640-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)
