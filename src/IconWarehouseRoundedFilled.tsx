import React from 'react'
import { IconProps } from './types.js'

export const IconWarehouseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-426q0-25 13.5-45t36.5-29l320-128q14-6 30-6t30 6l320 128q23 9 36.5 29t13.5 45v426q0 33-23.5 56.5T800-120H640v-320H320v320H160q-33 0-56.5-23.5T80-200Zm280 80v-80h80v80h-80Zm80-120v-80h80v80h-80Zm80 120v-80h80v80h-80Z" />
  </svg>
)