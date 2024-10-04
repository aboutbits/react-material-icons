import React from 'react'
import { IconProps } from './types.js'

export const IconTripSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-120v-600h160v600H720ZM400-720h160v-80H400v80Zm-80 600v-760h320v760H320Zm-240 0v-600h160v600H80Z" />
  </svg>
)
