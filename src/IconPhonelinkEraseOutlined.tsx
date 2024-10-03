import React from 'react'
import { IconProps } from './types.js'

export const IconPhonelinkEraseOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m576-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h400q33 0 56.5 23.5T720-840v160h-80v-40H240v480h400v-40h80v160q0 33-23.5 56.5T640-40H240Zm0-120v40h400v-40H240Zm0-640h400v-40H240v40Zm0 0v-40 40Zm0 640v40-40Z" />
  </svg>
)
