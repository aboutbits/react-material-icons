import React from 'react'
import { IconProps } from './types'

const IconRampLeftRound: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M12,21c-0.55,0-1-0.45-1-1V6.83l-0.88,0.88C9.73,8.1,9.1,8.1,8.71,7.71c-0.39-0.39-0.39-1.02,0-1.41l2.59-2.59 c0.39-0.39,1.02-0.39,1.41,0l2.59,2.59c0.39,0.39,0.39,1.02,0,1.41c-0.39,0.39-1.02,0.39-1.41,0L13,6.83v0V9 c0,3.62,2.89,6.22,4.97,7.62c0.52,0.35,0.59,1.09,0.14,1.53c-0.33,0.33-0.87,0.4-1.26,0.13c-1.59-1.06-2.89-2.28-3.85-3.59l0,5.3 C13,20.55,12.55,21,12,21z" />
    </g>
  </svg>
)

export { IconRampLeftRound as default }