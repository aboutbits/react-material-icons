import React from 'react'
import { IconProps } from './types'

const IconPhoneAndroidOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-160h160v-40H400v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-280h400v-400H280v400Z" />
  </svg>
)

export { IconPhoneAndroidOutlinedFilled as default }
