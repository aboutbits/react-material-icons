import React from 'react'
import { IconProps } from './types.js'

export const IconVpnKeyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 45.5T506-560h334q33 0 56.5 23.5T920-480q0 36-25 58t-55 22v80q0 33-23.5 56.5T760-240q-33 0-56.5-23.5T680-320v-80H506q-24 69-84.5 114.5T280-240Zm0-160q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Z" />
  </svg>
)