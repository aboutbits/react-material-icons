import React from 'react'
import { IconProps } from './types.js'

export const IconViewComfyAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-560H160q-33 0-56.5-23.5T80-640v-160q0-33 23.5-56.5T160-880h160q33 0 56.5 23.5T400-800v160q0 33-23.5 56.5T320-560Zm0 480H160q-33 0-56.5-23.5T80-160v-160q0-33 23.5-56.5T160-400h160q33 0 56.5 23.5T400-320v160q0 33-23.5 56.5T320-80Zm480-480H640q-33 0-56.5-23.5T560-640v-160q0-33 23.5-56.5T640-880h160q33 0 56.5 23.5T880-800v160q0 33-23.5 56.5T800-560Zm0 480H640q-33 0-56.5-23.5T560-160v-160q0-33 23.5-56.5T640-400h160q33 0 56.5 23.5T880-320v160q0 33-23.5 56.5T800-80Z" />
  </svg>
)