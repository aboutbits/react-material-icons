import React from 'react'
import { IconProps } from './types'

const IconInstallDesktopSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80H80v-640h400v80H160v480h640v-120h80v200H640v80H320Zm360-280L480-600l56-56 104 103v-287h80v287l104-103 56 56-200 200Z" />
  </svg>
)

export { IconInstallDesktopSharpFilled as default }
