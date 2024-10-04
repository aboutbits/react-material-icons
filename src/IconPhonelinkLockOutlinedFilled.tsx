import React from 'react'
import { IconProps } from './types'

const IconPhonelinkLockOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M634-320q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T720-640q33 0 56.5 23.5T800-560v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H634Zm46-200h80v-40q0-17-11.5-28.5T720-600q-17 0-28.5 11.5T680-560v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Z" />
  </svg>
)

export { IconPhonelinkLockOutlinedFilled as default }
