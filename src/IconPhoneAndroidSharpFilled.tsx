import React from 'react'
import { IconProps } from './types'

const IconPhoneAndroidSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-160h160v-40H400v40ZM200-40v-880h560v880H200Zm80-280h400v-400H280v400Z" />
  </svg>
)

export { IconPhoneAndroidSharpFilled as default }
