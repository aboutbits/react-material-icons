import React from 'react'
import { IconProps } from './types.js'

export const IconPhoneAndroidSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-160h160v-40H400v40ZM200-40v-880h560v880H200Zm80-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" />
  </svg>
)
