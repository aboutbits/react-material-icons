import React from 'react'
import { IconProps } from './types'

const IconAccountBalance: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>
      {props.title === undefined ? 'IconAccountBalance' : props.title}
    </title>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <rect height="7" width="3" x="4" y="10" />
        <rect height="7" width="3" x="10.5" y="10" />
        <rect height="3" width="20" x="2" y="19" />
        <rect height="7" width="3" x="17" y="10" />
        <polygon points="12,1 2,6 2,8 22,8 22,6" />
      </g>
    </g>
  </svg>
)

export { IconAccountBalance as default }
