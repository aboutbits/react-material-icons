import React from 'react'
import { IconProps } from './types'

const IconTurnSharpRightSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="18,6.83 19.59,8.41 21,7 17,3 13,7 14.41,8.41 16,6.83 16,13 6,13 6,21 8,21 8,15 18,15" />
    </g>
  </svg>
)

export { IconTurnSharpRightSharp as default }
