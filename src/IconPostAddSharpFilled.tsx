import React from 'react'
import { IconProps } from './types.js'

export const IconPostAddSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-520v-80h320v80H320Zm0 120v-80h320v80H320Zm0 120v-80h320v80H320Zm360-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM120-120v-720h440v80H200v560h560v-360h80v440H120Z" />
  </svg>
)
