import React from 'react'
import { IconProps } from './types'

const IconReadMoreSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="2" width="9" x="13" y="7" />
        <rect height="2" width="9" x="13" y="15" />
        <rect height="2" width="6" x="16" y="11" />
        <polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17" />
      </g>
    </g>
  </svg>
)

export { IconReadMoreSharp as default }
