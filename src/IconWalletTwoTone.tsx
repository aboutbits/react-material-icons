import React from 'react'
import { IconProps } from './types'

const IconWalletTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <path
          d="M18,10H6c-0.84,0-1.55,0.52-1.85,1.25l11.11,2.72c0.31,0.08,0.64,0,0.88-0.2l3.49-2.92 C19.26,10.34,18.67,10,18,10z"
          opacity=".3"
        />
        <path
          d="M18,6H6C4.9,6,4,6.9,4,8v0.55C4.59,8.21,5.27,8,6,8h12c0.73,0,1.41,0.21,2,0.55V8C20,6.9,19.1,6,18,6z"
          opacity=".3"
        />
        <path d="M18,4H6C3.79,4,2,5.79,2,8v8c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V8C22,5.79,20.21,4,18,4z M16.14,13.77 c-0.24,0.2-0.57,0.28-0.88,0.2L4.15,11.25C4.45,10.52,5.16,10,6,10h12c0.67,0,1.26,0.34,1.63,0.84L16.14,13.77z M20,8.55 C19.41,8.21,18.73,8,18,8H6C5.27,8,4.59,8.21,4,8.55V8c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2V8.55z" />
      </g>
    </g>
  </svg>
)

export { IconWalletTwoTone as default }
