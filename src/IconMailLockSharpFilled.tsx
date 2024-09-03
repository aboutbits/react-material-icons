import React from 'react'
import { IconProps } from './types'

const IconMailLockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-440 320-200v-80L480-520 160-720v80l320 200ZM80-160v-640h800v240h-40q-83 0-141.5 58.5T640-360v200H80Zm640 0v-200h40v-40q0-33 23.5-56.5T840-480q33 0 56.5 23.5T920-400v40h40v200H720Zm80-200h80v-40q0-17-11.5-28.5T840-440q-17 0-28.5 11.5T800-400v40Z" />
  </svg>
)

export { IconMailLockSharpFilled as default }
