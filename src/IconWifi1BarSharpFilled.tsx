import React from 'react'
import { IconProps } from './types.js'

export const IconWifi1BarSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 339-262q28-28 64.5-43t76.5-15q40 0 76.5 15t64.5 43L480-120Z" />
  </svg>
)
