import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardCapslockBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h400v-80H280v80Zm56-160 144-144 144 144 56-56-200-200-200 200 56 56ZM120-120v-720h720v720H120Z" />
  </svg>
)