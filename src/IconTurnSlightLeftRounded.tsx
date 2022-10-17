import React from 'react'
import { IconProps } from './types'

const IconTurnSlightLeftRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M11.66,5L11.66,5c0-0.55-0.45-1-1-1H7C6.45,4,6,4.45,6,5v3.66c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V7.41l5,5V19 c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-6.58c0-0.53-0.21-1.04-0.59-1.41l-5-5h1.24C11.21,6,11.66,5.55,11.66,5z" />
    </g>
  </svg>
)

export { IconTurnSlightLeftRounded as default }
