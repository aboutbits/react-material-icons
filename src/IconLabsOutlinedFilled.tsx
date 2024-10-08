import React from 'react'
import { IconProps } from './types'

const IconLabsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-141.5-58.5T280-280v-360q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640v360q0 83-58.5 141.5T480-80Zm0-80q50 0 85-35t35-85H480v-80h120v-80H480v-80h120v-120H360v360q0 50 35 85t85 35Z" />
  </svg>
)

export { IconLabsOutlinedFilled as default }
