import React from 'react'
import { IconProps } from './types'

const IconFireTruckRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <path d="M22.9,10.69l-1.44-4.32C21.18,5.55,20.42,5,19.56,5H19V4c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v1h-2c-1.1,0-2,0.9-2,2 v4H3c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h1c0,1.66,1.34,3,3,3s3-1.34,3-3h4c0,1.66,1.34,3,3,3s3-1.34,3-3h1c1.1,0,2-0.9,2-2v-4.68 C23,11.11,22.97,10.9,22.9,10.69z M7,19c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S7.55,19,7,19z M17,19c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S17.55,19,17,19z M14,11V7h5.56l1.33,4H14z" />
        <path d="M10.25,8.5H10v-2h0.25C10.66,6.5,11,6.16,11,5.75v0C11,5.34,10.66,5,10.25,5h-8.5C1.34,5,1,5.34,1,5.75v0 C1,6.16,1.34,6.5,1.75,6.5H2v2H1.75C1.34,8.5,1,8.84,1,9.25v0C1,9.66,1.34,10,1.75,10h8.5C10.66,10,11,9.66,11,9.25v0 C11,8.84,10.66,8.5,10.25,8.5z M5.25,8.5H3.5v-2h1.75V8.5z M8.5,8.5H6.75v-2H8.5V8.5z" />
      </g>
    </g>
  </svg>
)

export { IconFireTruckRounded as default }
