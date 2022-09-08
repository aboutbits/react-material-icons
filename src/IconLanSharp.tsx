import React from 'react'
import { IconProps } from './types'

const IconLanSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="13,22 21,22 21,15 18,15 18,11 13,11 13,9 16,9 16,2 8,2 8,9 11,9 11,11 6,11 6,15 3,15 3,22 11,22 11,15 8,15 8,13 16,13 16,15 13,15" />
    </g>
  </svg>
)

export { IconLanSharp as default }
