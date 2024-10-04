import React from 'react'
import { IconProps } from './types.js'

export const IconPanZoomRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M256-200h64q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H160q-17 0-28.5-11.5T120-160v-160q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v64l96-96q11-11 28-11t28 11q11 11 11 28t-11 28l-96 96Zm504-504-96 96q-11 11-28 11t-28-11q-11-11-11-28t11-28l96-96h-64q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h160q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-64Z" />
  </svg>
)