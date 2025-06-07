import React from 'react'
import { IconProps } from './types.js'

export const IconFluidBalanceSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v80H440v120H240v80h200v80H240v80h200q0 57 22.5 109t63.5 91H80ZM680-40v-124q-70-14-115-69t-45-127v-280h400v280q0 72-45 127t-115 69v44h120v80H680Zm110-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6Z" />
  </svg>
)
