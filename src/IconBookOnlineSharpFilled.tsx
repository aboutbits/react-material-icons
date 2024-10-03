import React from 'react'
import { IconProps } from './types.js'

export const IconBookOnlineSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320v-120q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520v-120h320v120q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440v120H320Zm160-60q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
