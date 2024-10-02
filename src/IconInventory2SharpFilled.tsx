import React from 'react'
import { IconProps } from './types'

export const IconInventory2SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-520H80v-280h800v280h-40v520H120Zm40-600h640v-120H160v120Zm200 280h240v-80H360v80Z" />
  </svg>
)
