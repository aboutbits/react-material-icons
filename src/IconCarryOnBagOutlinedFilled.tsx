import React from 'react'
import { IconProps } from './types.js'

export const IconCarryOnBagOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-100q-25 0-42.5-17.5T580-160q0-25 17.5-42.5T640-220q25 0 42.5 17.5T700-160q0 25-17.5 42.5T640-100Zm-320-20q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h40v560h-40Zm100 0v-560h140v-120q-33 0-56.5-23.5T480-880h160v600q-50 0-85 35t-35 85q0 11 1.5 20.5T527-120H420Z" />
  </svg>
)
