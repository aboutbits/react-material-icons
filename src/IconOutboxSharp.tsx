import React from 'react'
import { IconProps } from './types'

const IconOutboxSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="11,14 13,14 13,11 16,11 12,7 8,11 11,11" />
        <path d="M3,3v18h18V3H3z M19,14h-4.18c-0.41,1.16-1.51,2-2.82,2s-2.4-0.84-2.82-2H5V5h14V14z" />
      </g>
    </g>
  </svg>
)

export { IconOutboxSharp as default }
