import React from 'react'
import { IconProps } from './types'

const IconLabsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-141.5-58.5T280-280v-360h-80v-240h560v240h-80v360q0 83-58.5 141.5T480-80ZM280-720h400v-80H280v80Zm200 560q50 0 85-35t35-85H480v-80h120v-80H480v-80h120v-120H360v360q0 50 35 85t85 35ZM280-720v-80 80Z" />
  </svg>
)

export { IconLabsSharp as default }