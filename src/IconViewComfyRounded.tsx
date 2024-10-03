import React from 'react'
import { IconProps } from './types.js'

export const IconViewComfyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Zm720-280v-200H160v200h640ZM400-240h400v-200H400v200Zm-240 0h160v-200H160v200Z" />
  </svg>
)
