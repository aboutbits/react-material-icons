import React from 'react'
import { IconProps } from './types'

const IconSystemSecurityUpdateWarning: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <rect height="2" width="2" x="11" y="15" />
        <rect height="6" width="2" x="11" y="7" />
        <path d="M17,1H7C5.9,1,5.01,1.9,5.01,3v18c0,1.1,0.89,2,1.99,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,18H7V6h10V18z" />
      </g>
    </g>
  </svg>
)

export { IconSystemSecurityUpdateWarning as default }
