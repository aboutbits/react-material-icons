import React from 'react'
import { IconProps } from './types.js'

export const IconInactiveOrderOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M650-160h40v-160h-40v160Zm100 0h40v-160h-40v160ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-680q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v267q-28-14-58.5-20.5T720-520H240v80h284q-17 17-31.5 37T467-360H240v80h203q-2 10-2.5 19.5T440-240q0 42 11.5 80.5T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Z" />
  </svg>
)
