import React from 'react'
import { IconProps } from './types'

const IconPanToolAltSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20.18,13.4L19.1,21h-9L5,15.62l1.22-1.23L10,15.24V4.5C10,3.67,10.67,3,11.5,3S13,3.67,13,4.5v6h1.38L20.18,13.4z" />
    </g>
  </svg>
)

export { IconPanToolAltSharp as default }
