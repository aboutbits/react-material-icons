import React from 'react'
import { IconProps } from './types'

const IconChairAltOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-280q0-33 23.5-56.5T280-480h40v-80h-40q-33 0-56.5-23.5T200-640v-120q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v120q0 33-23.5 56.5T680-560h-40v80h40q33 0 56.5 23.5T760-400v280h-80v-120H280v120h-80Zm200-360h160v-80H400v80Z" />
  </svg>
)

export { IconChairAltOutlinedFilled as default }
