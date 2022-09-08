import React from 'react'
import { IconProps } from './types'

const IconDynamicFeedSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g />
      <g>
        <polygon points="8,8 6,8 6,17 17,17 17,15 8,15" />
        <path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z" />
        <polygon points="4,12 2,12 2,21 13,21 13,19 4,19" />
      </g>
    </g>
    <g display="none">
      <g display="inline" />
      <g display="inline">
        <polygon points="8,8 6,8 6,17 17,17 17,15 8,15" />
        <path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z" />
        <polygon points="4,12 2,12 2,21 13,21 13,19 4,19" />
      </g>
    </g>
  </svg>
)

export { IconDynamicFeedSharp as default }