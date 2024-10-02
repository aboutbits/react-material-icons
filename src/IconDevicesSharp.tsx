import React from 'react'
import { IconProps } from './types'

export const IconDevicesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-120h80v-520h680v80H240v440h240v120H80Zm480 0v-480h320v480H560Zm80-120h160v-280H640v280Zm0 0h160-160Z" />
  </svg>
)
