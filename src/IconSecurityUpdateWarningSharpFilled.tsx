import React from 'react'
import { IconProps } from './types'

const IconSecurityUpdateWarningSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-40-160v-240h80v240h-80ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)

export { IconSecurityUpdateWarningSharpFilled as default }
