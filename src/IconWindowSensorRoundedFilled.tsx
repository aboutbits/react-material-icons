import React from 'react'
import { IconProps } from './types.js'

export const IconWindowSensorRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-600q-17 0-28.5-11.5T840-640v-160q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600ZM120-200v-560q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v560q0 33-23.5 56.5T680-120H200q-33 0-56.5-23.5T120-200Zm120-320h160v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h160v-200H240v200Zm0 280h400v-200H240v200Zm-40 40h480v-560H200v560Z" />
  </svg>
)
