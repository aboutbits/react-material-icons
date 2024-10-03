import React from 'react'
import { IconProps } from './types.js'

export const IconCheckBoxSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM120-120v-720h720v720H120Z" />
  </svg>
)
