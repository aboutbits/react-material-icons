import React from 'react'
import { IconProps } from './types'

const IconDirectionsSubwayFilledRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <path d="M12,2C8,2,4,2.5,4,6v9.5C4,17.43,5.57,19,7.5,19l-1.21,0.81C6.11,19.93,6,20.13,6,20.35v0C6,20.71,6.29,21,6.65,21h10.7 c0.36,0,0.65-0.29,0.65-0.65v0c0-0.22-0.11-0.42-0.29-0.54L16.5,19c1.93,0,3.5-1.57,3.5-3.5V6C20,2.5,16.42,2,12,2z M8.5,16 C7.67,16,7,15.33,7,14.5S7.67,13,8.5,13s1.5,0.67,1.5,1.5S9.33,16,8.5,16z M11,10H6V7h5V10z M15.5,16c-0.83,0-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S16.33,16,15.5,16z M18,10h-5V7h5V10z" />
    </g>
  </svg>
)

export { IconDirectionsSubwayFilledRound as default }
