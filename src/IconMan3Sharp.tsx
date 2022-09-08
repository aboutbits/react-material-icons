import React from 'react'
import { IconProps } from './types'

const IconMan3Sharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect
          height="3.18"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)"
          width="3.18"
          x="10.41"
          y="2.41"
        />
      </g>
    </g>
  </svg>
)

export { IconMan3Sharp as default }
