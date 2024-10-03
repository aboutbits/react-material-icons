import React from 'react'
import { IconProps } from './types.js'

export const IconAodSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-380v-60h240v60H360Zm-40-120v-60h320v60H320ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
