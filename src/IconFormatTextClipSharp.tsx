import React from 'react'
import { IconProps } from './types'

export const IconFormatTextClipSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-640h80v640h-80Zm560 0v-280H320v-80h400v-280h80v640h-80Z" />
  </svg>
)
