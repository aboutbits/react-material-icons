import React from 'react'
import { IconProps } from './types'

const IconFireTruck: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M22.9,10.69l-1.44-4.32C21.18,5.55,20.42,5,19.56,5H19V4c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v1h-2c-1.1,0-2,0.9-2,2 v4H1v5c0,1.1,0.9,2,2,2h1c0,1.66,1.34,3,3,3s3-1.34,3-3h4c0,1.66,1.34,3,3,3s3-1.34,3-3h3v-6.68C23,11.11,22.97,10.9,22.9,10.69z M7,19c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S7.55,19,7,19z M17,19c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S17.55,19,17,19z M14,11V7h5.56l1.33,4H14z" />
        <path d="M11,8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5z M5.25,8.5H3.5v-2h1.75V8.5z M8.5,8.5H6.75v-2H8.5V8.5z" />
      </g>
    </g>
  </svg>
)

export { IconFireTruck as default }
