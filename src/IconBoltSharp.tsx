import React from 'react'
import { IconProps } from './types'

const IconBoltSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M11,21h-1l1-7H6.74c0,0,3.68-6.46,6.26-11h1l-1,7h4.28L11,21z" />
    </g>
  </svg>
)

export { IconBoltSharp as default }
