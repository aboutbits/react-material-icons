import React from 'react'
import { IconProps } from './types.js'

export const IconPermDeviceInformationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-300v-220h80v220h-80Zm40-300q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
