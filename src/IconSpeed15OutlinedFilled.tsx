import React from 'react'
import { IconProps } from './types.js'

export const IconSpeed15OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-320h-80v-80h160v400h-80Zm120 0v-80h80v80h-80Zm120 0v-80h160v-80H520v-240h240v80H600v80h80q33 0 56.5 23.5T760-440v80q0 33-23.5 56.5T680-280H520Z" />
  </svg>
)