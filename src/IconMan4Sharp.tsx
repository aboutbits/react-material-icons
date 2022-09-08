import React from 'react'
import { IconProps } from './types'

const IconMan4Sharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="7.96,7 10,22 14,22 16.04,7" />
        <circle cx="12" cy="4" r="2" />
      </g>
    </g>
  </svg>
)

export { IconMan4Sharp as default }
