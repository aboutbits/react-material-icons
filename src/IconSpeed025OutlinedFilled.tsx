import React from 'react'
import { IconProps } from './types'

export const IconSpeed025OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-80h80v80h-80Zm400 0v-80h160v-80H560v-240h240v80H640v80h80q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H560Zm-280 0v-160q0-33 23.5-56.5T360-520h80v-80H280v-80h160q33 0 56.5 23.5T520-600v80q0 33-23.5 56.5T440-440h-80v80h160v80H280Z" />
  </svg>
)
