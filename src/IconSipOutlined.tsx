import React from 'react'
import { IconProps } from './types'

export const IconSipOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h80v-240h-80v240Zm120 0h60v-80h100q17 0 28.5-11.5T760-480v-80q0-17-11.5-28.5T720-600H560v240Zm-360 0h160q17 0 28.5-11.5T400-400v-70q0-17-11.5-28.5T360-510H260v-30h140v-60H240q-17 0-28.5 11.5T200-560v70q0 17 11.5 28.5T240-450h100v30H200v60Zm420-140v-40h80v40h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)
