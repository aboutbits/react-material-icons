import React from 'react'
import { IconProps } from './types.js'

export const IconNetworkLockedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80v-200h40v-40q0-33 23.5-56.5T800-400q33 0 56.5 23.5T880-320v40h40v200H680Zm80-200h80v-40q0-17-11.5-28.5T800-360q-17 0-28.5 11.5T760-320v40ZM80-80l800-800v400h-80q-83 0-141.5 58.5T600-280v200H80Z" />
  </svg>
)
