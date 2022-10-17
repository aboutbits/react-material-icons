import React from 'react'
import { IconProps } from './types'

const IconTurnLeftRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M7.71,13.29c-0.39,0.39-1.02,0.39-1.41,0l-2.59-2.59c-0.39-0.39-0.39-1.02,0-1.41l2.59-2.59c0.39-0.39,1.02-0.39,1.41,0 c0.39,0.39,0.39,1.02,0,1.41L6.83,9L15,9c1.1,0,2,0.9,2,2v8c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1v-8l-8.17,0l0.88,0.88 C8.1,12.27,8.1,12.9,7.71,13.29z" />
    </g>
  </svg>
)

export { IconTurnLeftRounded as default }
