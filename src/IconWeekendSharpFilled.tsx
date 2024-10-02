import React from 'react'
import { IconProps } from './types'

export const IconWeekendSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-400h160v240h560v-240h160v400H40Zm240-240v-240H160v-160h640v160H680v240H280Z" />
  </svg>
)
