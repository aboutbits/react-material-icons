import React from 'react'
import { IconProps } from './types'

const IconWeekend: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{props.title === undefined ? 'IconWeekend' : props.title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M21,10c-1.1,0-2,0.9-2,2v3H5v-3c0-1.1-0.89-2-2-2s-2,0.9-2,2v5c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2v-5 C23,10.9,22.1,10,21,10z M18,5H6C4.9,5,4,5.9,4,7v2.15c1.16,0.41,2,1.52,2,2.81V14h12v-2.03c0-1.3,0.84-2.4,2-2.81V7 C20,5.9,19.1,5,18,5z" />
    </g>
  </svg>
)

export { IconWeekend as default }
