import React from 'react'
import { IconProps } from './types.js'

export const IconStockpotRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160q-50 0-85-35t-35-85v-320q0-17 11.5-28.5T160-640h640q17 0 28.5 11.5T840-600v320q0 50-35 85t-85 35H240Zm120-600v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h200q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h200Z" />
  </svg>
)
