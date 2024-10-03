import React from 'react'
import { IconProps } from './types.js'

export const IconPenSize5OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M235-235q-35-35-35-85t35-85l320-320q35-35 85-35t85 35q35 35 35 85t-35 85L405-235q-35 35-85 35t-85-35Z" />
  </svg>
)
