import React from 'react'
import { IconProps } from './types'

const IconAddCardRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M14,19c0-0.55-0.45-1-1-1H4v-6h18V6c0-1.1-0.9-2-2-2H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h9 C13.55,20,14,19.55,14,19z M20,8H4V6h16V8z M20,22c-0.55,0-1-0.45-1-1v-2h-2c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h2v-2 c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1v2h2c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1h-2v2C21,21.55,20.55,22,20,22z" />
    </g>
  </svg>
)

export { IconAddCardRounded as default }
