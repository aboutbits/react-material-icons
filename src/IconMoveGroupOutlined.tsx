import React from 'react'
import { IconProps } from './types'

export const IconMoveGroupOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240q-33 0-56.5-23.5T240-320v-80h80v80h480v-400H320v80h-80v-160q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm360-280-56-56 63-64H240v-80h287l-63-64 56-56 160 160-160 160Z" />
  </svg>
)
