import React from 'react'
import { IconProps } from './types.js'

export const IconScienceOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-473 360-713v-47h-80v-80h400v80h-80v287ZM792-56l-64-64H200q-51 0-72.5-45.5T138-250l208-252L56-792l56-56 736 736-56 56Z" />
  </svg>
)
