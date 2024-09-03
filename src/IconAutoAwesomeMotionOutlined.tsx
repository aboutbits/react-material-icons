import React from 'react'
import { IconProps } from './types'

const IconAutoAwesomeMotionOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80h320v-320H480v320Zm-240-80v-400q0-33 23.5-56.5T320-720h400v80H320v400h-80ZM80-400v-400q0-33 23.5-56.5T160-880h400v80H160v400H80Zm400 240v-320 320Z" />
  </svg>
)

export { IconAutoAwesomeMotionOutlined as default }
