import React from 'react'
import { IconProps } from './types'

const IconShuffleOnSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M1,1v22h22V1H1z M5.41,4l5.18,5.17l-1.42,1.41L4,5.41L5.41,4z M20,20h-5.5l2.05-2.05l-3.13-3.13l1.41-1.41l3.13,3.13 L20,14.5V20z M20,9.5l-2.04-2.04L5.41,20L4,18.59L16.54,6.04L14.5,4H20V9.5z" />
    </g>
  </svg>
)

export { IconShuffleOnSharp as default }
