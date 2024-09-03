import React from 'react'
import { IconProps } from './types'

const IconInstallMobileSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-40v-880h360v200H280v480h400v-80h80v280H200Zm520-360L520-600l56-56 104 104v-288h80v288l104-104 56 56-200 200Z" />
  </svg>
)

export { IconInstallMobileSharpFilled as default }
