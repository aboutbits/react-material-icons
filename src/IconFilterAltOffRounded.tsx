import React from 'react'
import { IconProps } from './types'

const IconFilterAltOffRounded: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" />
        <path d="M20.49,20.49L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L10,13v5c0,1.1,0.9,2,2,2s2-0.9,2-2 v-1.17l5.07,5.07c0.39,0.39,1.02,0.39,1.41,0S20.88,20.88,20.49,20.49z" />
      </g>
    </g>
  </svg>
)

export { IconFilterAltOffRounded as default }
