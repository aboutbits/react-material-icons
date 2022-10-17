import React from 'react'
import { IconProps } from './types'

const IconPhishingRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M19,9c0-1.3-0.84-2.4-2-2.82V3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v3.18C13.84,6.6,13,7.7,13,9s0.84,2.4,2,2.82l0,3.01 c0,2.09-1.52,3.96-3.6,4.16C9.02,19.21,7,17.34,7,15v-1h1.79c0.45,0,0.67-0.54,0.35-0.85L5.85,9.85C5.54,9.54,5,9.76,5,10.21 l0,4.58c0,3.05,2.19,5.77,5.21,6.16C13.87,21.42,17,18.57,17,15v-3.18C18.16,11.4,19,10.3,19,9z M16,10c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S16.55,10,16,10z" />
    </g>
  </svg>
)

export { IconPhishingRounded as default }
