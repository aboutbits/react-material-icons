import React from 'react'
import { IconProps } from './types'

const IconVpnKeyOff: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M20.83,18H21v-4h2v-4H12.83L20.83,18z M19.78,22.61l1.41-1.41L2.81,2.81L1.39,4.22l2.59,2.59C2.2,7.85,1,9.79,1,12 c0,3.31,2.69,6,6,6c2.21,0,4.15-1.2,5.18-2.99L19.78,22.61z M8.99,11.82C9,11.88,9,11.94,9,12c0,1.1-0.9,2-2,2s-2-0.9-2-2 s0.9-2,2-2c0.06,0,0.12,0,0.18,0.01L8.99,11.82z" />
      </g>
    </g>
  </svg>
)

export { IconVpnKeyOff as default }
