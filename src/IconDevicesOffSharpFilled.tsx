import React from 'react'
import { IconProps } from './types'

const IconDevicesOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m354-720-80-80h566v80H354Zm526 520L560-514v-86q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400ZM792-56 688-160h-88q-17 0-28.5-11.5T560-200v-88L240-608v328h240v120H80v-120h80v-408L56-792l56-56 736 736-56 56Z" />
  </svg>
)

export { IconDevicesOffSharpFilled as default }
