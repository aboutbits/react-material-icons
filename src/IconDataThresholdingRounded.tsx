import React from 'react'
import { IconProps } from './types'

const IconDataThresholdingRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11.38,8.88l1.29,1.29l2.96-2.96 c0.39-0.39,1.02-0.39,1.41,0v0c0.39,0.39,0.39,1.02,0,1.41l-3.67,3.67c-0.39,0.39-1.02,0.39-1.41,0L10.67,11l-2.3,2.3 c-0.39,0.39-1.02,0.39-1.41,0l0,0c-0.39-0.39-0.39-1.02,0-1.41l3-3C10.35,8.48,10.98,8.48,11.38,8.88z M5,16h1.72L5,17.72V16z M5.84,19l3-3h1.83l-3,3H5.84z M9.8,19l3-3h1.62l-3,3H9.8z M13.53,19l3-3h1.62l-3,3H13.53z M19,19h-1.73L19,17.27V19z" />
    </g>
  </svg>
)

export { IconDataThresholdingRounded as default }
