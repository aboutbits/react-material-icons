import React from 'react'
import { IconProps } from './types'

const IconTurnSharpLeftSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="6,6.83 4.41,8.41 3,7 7,3 11,7 9.59,8.41 8,6.83 8,13 18,13 18,21 16,21 16,15 6,15" />
    </g>
  </svg>
)

export { IconTurnSharpLeftSharp as default }
