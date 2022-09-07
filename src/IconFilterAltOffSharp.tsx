import React from 'react'
import { IconProps } from './types'

const IconFilterAltOffSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="21.05,4 6.83,4 14.8,11.97" />
        <polygon points="2.81,2.81 1.39,4.22 10,13 10,20 14,20 14,16.83 19.78,22.61 21.19,21.19" />
      </g>
    </g>
  </svg>
)

export { IconFilterAltOffSharp as default }
