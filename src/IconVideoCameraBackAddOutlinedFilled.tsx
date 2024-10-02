import React from 'react'
import { IconProps } from './types'

export const IconVideoCameraBackAddOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-280q26 20 57 30t63 10q83 0 141.5-58.5T400-680q0-32-10-63t-30-57h280q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-400v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Zm40 240h400L465-500 360-360l-65-87-95 127Z" />
  </svg>
)
