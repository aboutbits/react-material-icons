import React from 'react'
import { IconProps } from './types'

const IconOutputRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M17.71,16.29l3.59-3.59c0.39-0.39,0.39-1.02,0-1.41l-3.59-3.59c-0.39-0.39-1.02-0.39-1.41,0v0 c-0.39,0.39-0.39,1.02,0,1.41L18.17,11H10c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h8.17l-1.88,1.88c-0.39,0.39-0.39,1.02,0,1.41 l0,0C16.68,16.68,17.32,16.68,17.71,16.29z" />
        <path d="M19,19H5V5h14v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14 c1.11,0,2-0.9,2-2v-1c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1V19z" />
      </g>
    </g>
  </svg>
)

export { IconOutputRounded as default }
