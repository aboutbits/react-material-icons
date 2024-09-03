import React from 'react'
import { IconProps } from './types'

const IconStreamAppsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-440h200v-120H640v120Zm-80 160v-320q0-17 11.5-28.5T600-640h280q17 0 28.5 11.5T920-600v200q0 17-11.5 28.5T880-360H640l-80 80ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Zm360-280v-120 120Z" />
  </svg>
)

export { IconStreamAppsOutlined as default }