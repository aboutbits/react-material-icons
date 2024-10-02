import React from 'react'
import { IconProps } from './types'

export const IconScreenshotSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280v-60h100v-100h60v160H480ZM320-520v-160h160v60H380v100h-60ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
