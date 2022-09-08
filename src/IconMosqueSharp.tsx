import React from 'react'
import { IconProps } from './types'

const IconMosqueSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M6.12,8C6,8,18,8,17.88,8" />
        <path d="M17.88,8C17.95,7.71,18,7.41,18,7.09c0-1.31-0.65-2.53-1.74-3.25L12,1L7.74,3.84C6.65,4.56,6,5.78,6,7.09 C6,7.41,6.05,7.71,6.12,8" />
        <path d="M24,7c0-1.1-2-3-2-3s-2,1.9-2,3c0,0.74,0.4,1.38,1,1.72V13h-2V9H5v4H3V8.72C3.6,8.38,4,7.74,4,7c0-1.1-2-3-2-3S0,5.9,0,7 c0,0.74,0.4,1.38,1,1.72V21h9v-6h4v6h9V8.72C23.6,8.38,24,7.74,24,7z" />
      </g>
    </g>
  </svg>
)

export { IconMosqueSharp as default }
