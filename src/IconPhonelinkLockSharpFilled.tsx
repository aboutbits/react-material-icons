import React from 'react'
import { IconProps } from './types'

const IconPhonelinkLockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-320v-200h40v-40q0-33 23.5-56.5T720-640q33 0 56.5 23.5T800-560v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-600q-17 0-28.5 11.5T680-560v40ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Z" />
  </svg>
)

export { IconPhonelinkLockSharpFilled as default }
