import React from 'react'
import { IconProps } from './types'

const IconSwitchCameraOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-280 56-56-62-62h252l-62 62 56 56 160-160-160-160-56 56 64 66H352l64-66-56-56-160 160 160 160ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
  </svg>
)

export { IconSwitchCameraOutlined as default }
