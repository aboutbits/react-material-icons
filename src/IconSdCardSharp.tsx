import React from 'react'
import { IconProps } from './types.js'

export const IconSdCardSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-520h80v-160h-80v160Zm120 0h80v-160h-80v160Zm120 0h80v-160h-80v160ZM160-80v-560l240-240h400v800H160Zm80-80h480v-640H434L240-606v446Zm0 0h480-480Z" />
  </svg>
)
