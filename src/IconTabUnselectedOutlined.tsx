import React from 'react'
import { IconProps } from './types.js'

export const IconTabUnselectedOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240h80v80ZM80-320v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80q0-33 23.5-56.5T160-800h80v80h-80v80H80Zm160 480v-80h80v80h-80Zm80-560v-80h80v80h-80Zm80 560v-80h80v80h-80Zm80-400v-240h320q33 0 56.5 23.5T880-720v160H480Zm80 400v-80h80v80h-80Zm160 0v-80h80v-80h80v80q0 33-23.5 56.5T800-160h-80Zm80-240v-80h80v80h-80Z" />
  </svg>
)
