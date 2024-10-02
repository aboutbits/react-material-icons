import React from 'react'
import { IconProps } from './types'

export const IconShopSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Zm-20 480 280-180-280-180v360Z" />
  </svg>
)
