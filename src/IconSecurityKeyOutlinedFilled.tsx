import React from 'react'
import { IconProps } from './types.js'

export const IconSecurityKeyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-40q-33 0-56.5-23.5T320-120v-120q-33 0-56.5-23.5T240-320v-520q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v520q0 33-23.5 56.5T640-240v120q0 33-23.5 56.5T560-40H400Zm80-420q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80 340h160v-120H400v120Zm80-420q-17 0-28.5-11.5T440-580q0-17 11.5-28.5T480-620q17 0 28.5 11.5T520-580q0 17-11.5 28.5T480-540Z" />
  </svg>
)