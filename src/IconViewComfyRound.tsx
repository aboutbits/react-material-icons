import React from 'react'
import { IconProps } from './types'

const IconViewComfyRound: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,5v5c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H3C2.45,4,2,4.45,2,5z M11,20h10c0.55,0,1-0.45,1-1v-5 c0-0.55-0.45-1-1-1H11c-0.55,0-1,0.45-1,1v5C10,19.55,10.45,20,11,20z M3,20h4c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H3 c-0.55,0-1,0.45-1,1v5C2,19.55,2.45,20,3,20z" />
    </g>
  </svg>
)

export { IconViewComfyRound as default }
