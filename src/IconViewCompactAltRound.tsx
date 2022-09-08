import React from 'react'
import { IconProps } from './types'

const IconViewCompactAltRound: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M11,16.5H8 c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C11.5,16.28,11.28,16.5,11,16.5z M11,11.5H8 c-0.28,0-0.5-0.22-0.5-0.5V8c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C11.5,11.28,11.28,11.5,11,11.5z M16,16.5h-3 c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C16.5,16.28,16.28,16.5,16,16.5z M16,11.5h-3 c-0.28,0-0.5-0.22-0.5-0.5V8c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v3C16.5,11.28,16.28,11.5,16,11.5z" />
      </g>
    </g>
  </svg>
)

export { IconViewCompactAltRound as default }