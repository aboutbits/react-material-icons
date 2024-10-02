import React from 'react'
import { IconProps } from './types'

export const IconSystemUpdateSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40v-880h560v880H200Zm80-200h400v-480H280v480Zm200-80L320-480l56-56 64 62v-166h80v166l64-62 56 56-160 160Z" />
  </svg>
)
