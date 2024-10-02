import React from 'react'
import { IconProps } from './types'

export const IconMarkunreadMailboxOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400v-160h-80v400h640v-400H400v-80h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-240h320v160H320v320h-80Zm-80-160v160-160 400-400Z" />
  </svg>
)
