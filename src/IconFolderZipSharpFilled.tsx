import React from 'react'
import { IconProps } from './types'

export const IconFolderZipSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm480-80h80v-80h80v-80h-80v-80h80v-80h-80v-80h-80v80h80v80h-80v80h80v80h-80v80Z" />
  </svg>
)
