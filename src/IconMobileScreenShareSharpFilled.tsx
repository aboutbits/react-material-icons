import React from 'react'
import { IconProps } from './types.js'

export const IconMobileScreenShareSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360v-180h160v-80l120 120-120 120v-80h-80v100h-80ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
