import React from 'react'
import { IconProps } from './types'

export const IconMailLockOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-440 320-200v-80L480-520 160-720v80l320 200Zm280 280q-17 0-28.5-11.5T720-200v-120q0-17 11.5-28.5T760-360v-40q0-33 23.5-56.5T840-480q33 0 56.5 23.5T920-400v40q17 0 28.5 11.5T960-320v120q0 17-11.5 28.5T920-160H760Zm40-200h80v-40q0-17-11.5-28.5T840-440q-17 0-28.5 11.5T800-400v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160h-40q-83 0-141.5 58.5T640-360v200H160Z" />
  </svg>
)
