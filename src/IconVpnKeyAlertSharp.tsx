import React from 'react'
import { IconProps } from './types'

const IconVpnKeyAlertSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-240v-120H488q-32 54-87 87t-121 33q-100 0-170-70T40-480q0-100 70-170t170-70q66 0 121 33t87 87h272v80H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 106-40.5t48-79.5h246v120h80v80H600ZM280-400q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0-80Zm600 240q-17 0-28.5-11.5T840-280q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240Zm-40-160v-200h80v200h-80Z" />
  </svg>
)

export { IconVpnKeyAlertSharp as default }
