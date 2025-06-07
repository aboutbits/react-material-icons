import React from 'react'
import { IconProps } from './types.js'

export const IconDockSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-40v-80h320v80H320Zm-80-160v-720h480v720H240Zm80-200h320v-320H320v320Z" />
  </svg>
)
