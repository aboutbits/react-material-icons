import React from 'react'
import { IconProps } from './types'

export const IconInventory2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-520H80v-280h800v280h-40v520H120Zm80-80h560v-440H200v440Zm-40-520h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z" />
  </svg>
)
