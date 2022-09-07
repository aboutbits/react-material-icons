import React from 'react'
import { IconProps } from './types'

const IconDataArrayRound: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M15,5L15,5c0,0.55,0.45,1,1,1h2v12h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-2 C15.45,4,15,4.45,15,5z" />
        <path d="M6,20h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6V6h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6C4.9,4,4,4.9,4,6v12 C4,19.1,4.9,20,6,20z" />
      </g>
    </g>
  </svg>
)

export { IconDataArrayRound as default }
