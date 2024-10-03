import React from 'react'
import { IconProps } from './types.js'

export const IconVideoCameraBackAddSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-480ZM80-160v-320h80v240h480v-480H400v-80h320v260l160-160v440L720-420v260H80Zm120-160h400L465-500 360-360l-65-87-95 127Zm-40-240v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
