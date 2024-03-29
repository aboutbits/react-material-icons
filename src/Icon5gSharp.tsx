import React from 'react'
import { IconProps } from './types'

const Icon5gSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="17,13 19,13 19,15 14,15 14,9 21,9 21,7 12,7 12,17 21,17 21,11 17,11" />
        <polygon points="3,13 8,13 8,15 3,15 3,17 10,17 10,11 5,11 5,9 10,9 10,7 3,7" />
      </g>
    </g>
  </svg>
)

export { Icon5gSharp as default }
