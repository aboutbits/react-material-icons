import React from 'react'
import { IconProps } from './types'

const IconIosShareSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="20,8 15,8 15,10 18,10 18,21 6,21 6,10 9,10 9,8 4,8 4,23 20,23" />
        <polygon points="11,16 13,16 13,5 16,5 12,1 8,5 11,5" />
      </g>
    </g>
  </svg>
)

export { IconIosShareSharp as default }
