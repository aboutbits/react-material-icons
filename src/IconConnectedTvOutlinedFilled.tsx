import React from 'react'
import { IconProps } from './types.js'

export const IconConnectedTvOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-320h80q0-33-23.5-56.5T200-400v80Zm142 0h58q0-83-58.5-141.5T200-520v58q59 0 100.5 41.5T342-320Zm120 0h58q0-66-25-124.5t-68.5-102Q383-590 324.5-615T200-640v58q109 0 185.5 76.5T462-320ZM320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320Z" />
  </svg>
)