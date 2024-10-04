import React from 'react'
import { IconProps } from './types.js'

export const IconOpenInPhoneOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-33 0-56.5-23.5T200-120v-240h80v120h400v-480H280v120h-80v-240q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm120-280-56-56 62-64H80v-80h326l-62-64 56-56 160 160-160 160Z" />
  </svg>
)