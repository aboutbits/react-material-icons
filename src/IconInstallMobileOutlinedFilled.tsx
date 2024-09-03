import React from 'react'
import { IconProps } from './types'

const IconInstallMobileOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h280v200H280v480h400v-80h80v200q0 33-23.5 56.5T680-40H280Zm440-360L520-600l56-56 104 104v-288h80v288l104-104 56 56-200 200Z" />
  </svg>
)

export { IconInstallMobileOutlinedFilled as default }
