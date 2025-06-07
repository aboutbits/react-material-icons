import React from 'react'
import { IconProps } from './types.js'

export const IconMarkunreadMailboxOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-240h320v160H320v320h80v-240h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Z" />
  </svg>
)
