import React from 'react'
import { IconProps } from './types'

const IconBreakfastDiningRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <path d="M18,3H6C3.79,3,2,4.79,2,7c0,1.48,0.81,2.75,2,3.45V19c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-8.55c1.19-0.69,2-1.97,2-3.45 C22,4.79,20.21,3,18,3z M15.71,13.7l-3,3c-0.39,0.39-1.02,0.39-1.42,0l-3-3c-0.39-0.39-0.39-1.02,0-1.41l3-3 c0.39-0.39,1.02-0.39,1.41,0l3,3C16.1,12.68,16.1,13.31,15.71,13.7z" />
    </g>
  </svg>
)

export { IconBreakfastDiningRound as default }
