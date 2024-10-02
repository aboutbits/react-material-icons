import React from 'react'
import { IconProps } from './types'

export const IconRollerSkatingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-320v-600h320v120H380q-8 0-14 6t-6 14q0 8 6 14t14 6h100v20q0 5 .5 10t1.5 10H380q-8 0-14 6t-6 14q0 8 6 14t14 6h116q14 23 35.5 39t47.5 24l105 29q52 14 84 56.5t32 96.5v115H160Zm40 280q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm560 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-280 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)
