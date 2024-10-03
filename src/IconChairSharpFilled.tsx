import React from 'react'
import { IconProps } from './types.js'

export const IconChairSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80H40v-360h160v200h560v-200h160v360H800v80h-80v-80H240v80h-80Zm120-320v-200H160v-200h640v200H680v200H280Z" />
  </svg>
)
