import React from 'react'
import { IconProps } from './types'

const IconVideoCameraBackAddOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-480ZM160-160q-33 0-56.5-23.5T80-240v-240h80v240h480v-480H400v-80h240q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm40-160h400L465-500 360-360l-65-87-95 127Zm-40-240v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconVideoCameraBackAddOutlined as default }