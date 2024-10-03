import React from 'react'
import { IconProps } from './types.js'

export const IconFormatItalicSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z" />
  </svg>
)
