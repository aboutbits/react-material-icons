import React from 'react'
import { IconProps } from './types'

const IconManSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <polygon points="16,7 8,7 8,15 10,15 10,22 14,22 14,15 16,15" />
        <circle cx="12" cy="4" r="2" />
      </g>
    </g>
  </svg>
)

export { IconManSharp as default }
