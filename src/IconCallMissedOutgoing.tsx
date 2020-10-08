import React from 'react'
import { IconProps } from './types'

const IconCallMissedOutgoing: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>
      {props.title === undefined ? 'IconCallMissedOutgoing' : props.title}
    </title>
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <g>
          <path d="M3,8.41l9,9l7-7V15h2V7h-8v2h4.59L12,14.59L4.41,7L3,8.41z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCallMissedOutgoing as default }
