import React from 'react'
import { IconProps } from './types.js'

export const IconInstallMobileOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h280v80H280v40h280v80H280v480h400v-80h80v200q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm440-240L520-600l56-56 104 104v-288h80v288l104-104 56 56-200 200ZM280-800v-40 40Zm0 640v40-40Z" />
  </svg>
)
