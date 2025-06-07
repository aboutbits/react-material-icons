import React from 'react'
import { IconProps } from './types.js'

export const IconSpeed05Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-80h80v80h-80Zm120 0v-80h160v-80H400v-240h240v80H480v80h80q33 0 56.5 23.5T640-440v80q0 33-23.5 56.5T560-280H400Z" />
  </svg>
)
