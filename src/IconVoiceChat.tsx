import React from 'react'
import { IconProps } from './types'

const IconVoiceChat: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H6l-2,2V4h16V16z" />
        <rect height="10" width="1.5" x="11.25" y="5" />
        <rect height="6" width="1.5" x="8.5" y="7" />
        <rect height="2" width="1.5" x="6" y="9" />
        <rect height="6" width="1.5" x="14" y="7" />
        <rect height="2" width="1.5" x="16.5" y="9" />
      </g>
    </g>
  </svg>
)

export { IconVoiceChat as default }
