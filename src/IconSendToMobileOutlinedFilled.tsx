import React from 'react'
import { IconProps } from './types'

export const IconSendToMobileOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m680-320-56-56 62-64H480v-80h206l-62-64 56-56 160 160-160 160ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Z" />
  </svg>
)
