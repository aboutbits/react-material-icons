import React from 'react'
import { IconProps } from './types'

const IconPhonelinkOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m354-720-80-80h566v80H354Zm526 520L560-514v-126h320v440ZM792-56 688-160H560v-128L240-608v328h240v120H80v-120h80v-408L56-792l56-56 736 736-56 56Z" />
  </svg>
)

export { IconPhonelinkOffSharpFilled as default }
