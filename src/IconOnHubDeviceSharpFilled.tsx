import React from 'react'
import { IconProps } from './types.js'

export const IconOnHubDeviceSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80h320v80H320Zm0-120-47-600h414l-47 600H320Z" />
  </svg>
)
