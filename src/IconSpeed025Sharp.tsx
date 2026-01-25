import React from 'react'
import { IconProps } from './types.js'

export const IconSpeed025Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-80h80v80h-80Zm400 0v-80h160v-80H560v-240h240v80H640v80h160v240H560Zm-280 0v-240h160v-80H280v-80h240v240H360v80h160v80H280Z" />
  </svg>
)
