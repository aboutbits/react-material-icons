import React from 'react'
import { IconProps } from './types'

const IconVpnKeyOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M763-84 486-360q-32 54-85.5 87T280-240q-100 0-170-70T40-480q0-66 32-121t86-87l-75-75q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm50-176L513-560h327q33 0 56.5 23.5T920-480q0 33-23.5 56.5T840-400v80q0 19.57-8 34.78Q824-270 813-260ZM280-400q33 0 56.5-23.5T360-480v-7l-73-73h-7q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Z" />
  </svg>
)

export { IconVpnKeyOffRoundedFilled as default }
