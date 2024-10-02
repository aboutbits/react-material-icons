import React from 'react'
import { IconProps } from './types'

export const IconFileMapStackOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm400-480q-17 0-28.5-11.5T520-600q0-17 11.5-28.5T560-640q17 0 28.5 11.5T600-600q0 17-11.5 28.5T560-560Zm0 200q81-69 120.5-127.5T720-596q0-75-48.5-119.5T560-760q-63 0-111.5 44.5T400-596q0 50 39.5 108.5T560-360Z" />
  </svg>
)
