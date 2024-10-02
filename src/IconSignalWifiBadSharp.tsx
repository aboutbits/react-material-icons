import React from 'react'
import { IconProps } from './types'

export const IconSignalWifiBadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L812-452q-17-5-35-8t-37-3q-101 0-172 70.5T497-220q0 19 3 37t8 35l-28 28Zm176 40-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z" />
  </svg>
)
