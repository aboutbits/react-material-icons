import React from 'react'
import { IconProps } from './types'

const IconVideoCameraBackAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-360q26 20 57 30t63 10q83 0 141.5-58.5T400-680q0-32-10-63t-30-57h360v260l160-160v440L720-420v260H80Zm80-400v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Zm40 240h400L465-500 360-360l-65-87-95 127Z" />
  </svg>
)

export { IconVideoCameraBackAddSharpFilled as default }
