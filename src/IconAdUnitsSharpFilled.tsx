import React from 'react'
import { IconProps } from './types'

export const IconAdUnitsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-600v-80h320v80H320ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
