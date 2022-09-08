import React from 'react'
import { IconProps } from './types'

const IconClosedCaptionOffRound: React.FC<IconProps> = ({ ...props }) => (
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
      <g enableBackground="new">
        <path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M11,10.5 c0,0.28-0.22,0.5-0.5,0.5H10c-0.28,0-0.5-0.22-0.5-0.5h-2v3h2c0-0.28,0.22-0.5,0.5-0.5h0.5c0.28,0,0.5,0.22,0.5,0.5V14 c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V10.5z M18,10.5c0,0.28-0.22,0.5-0.5,0.5H17 c-0.28,0-0.5-0.22-0.5-0.5h-2v3h2c0-0.28,0.22-0.5,0.5-0.5h0.5c0.28,0,0.5,0.22,0.5,0.5V14c0,0.55-0.45,1-1,1h-3 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V10.5z" />
      </g>
    </g>
  </svg>
)

export { IconClosedCaptionOffRound as default }
