import React from 'react'
import { IconProps } from './types'

const IconSubtitlesOffSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="6.83,4 14.83,12 20,12 20,14 16.83,14 22,19.17 22,4" />
        <path d="M1.04,3.87L2,4.83V20h15.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M4,12h4v2H4V12z M4,16h9.17L14,16.83V18H4V16z" />
      </g>
    </g>
  </svg>
)

export { IconSubtitlesOffSharp as default }
