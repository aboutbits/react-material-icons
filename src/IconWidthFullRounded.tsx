import React from 'react'
import { IconProps } from './types'

export const IconWidthFullRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h40v-480h-40v480Zm120 0h400v-480H280v480Zm480 0h40v-480h-40v480ZM280-720v480-480Z" />
  </svg>
)
