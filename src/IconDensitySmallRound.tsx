import React from 'react'
import { IconProps } from './types'

const IconDensitySmallRound: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M3,3L3,3c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,2,3,2.45,3,3z" />
        <path d="M4,22h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,21.55,3.45,22,4,22z" />
        <path d="M4,16h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,15.55,3.45,16,4,16z" />
        <path d="M4,10h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,8,3,8.45,3,9v0C3,9.55,3.45,10,4,10z" />
      </g>
    </g>
  </svg>
)

export { IconDensitySmallRound as default }
