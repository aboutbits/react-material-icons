import React from 'react'
import { IconProps } from './types.js'

export const IconEjectSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Z" />
  </svg>
)
