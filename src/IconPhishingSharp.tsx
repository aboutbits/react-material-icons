import React from 'react'
import { IconProps } from './types'

const IconPhishingSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M19,9c0-1.3-0.84-2.4-2-2.82V2h-2v4.18C13.84,6.6,13,7.7,13,9s0.84,2.4,2,2.82V15c0,2.21-1.79,4-4,4s-4-1.79-4-4v-1h3L5,9 v6c0,3.31,2.69,6,6,6s6-2.69,6-6v-3.18C18.16,11.4,19,10.3,19,9z M16,10c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S16.55,10,16,10z" />
    </g>
  </svg>
)

export { IconPhishingSharp as default }
