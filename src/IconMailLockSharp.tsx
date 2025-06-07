import React from 'react'
import { IconProps } from './types.js'

export const IconMailLockSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v239h-80v-79L480-440 160-640v400h480v80H80Zm400-360 320-200H160l320 200ZM160-240v-480 480Zm560 80v-200h40v-40q0-33 23.5-56.5T840-480q33 0 56.5 23.5T920-400v40h40v200H720Zm80-200h80v-40q0-17-11.5-28.5T840-440q-17 0-28.5 11.5T800-400v40Z" />
  </svg>
)
