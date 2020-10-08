import React from 'react'
import { IconProps } from './types'

const IconChargingStation: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>
      {props.title === undefined ? 'IconChargingStation' : props.title}
    </title>
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M14.5,11l-3,6v-4h-2l3-6v4H14.5z M7,1h10c1.1,0,2,0.9,2,2v18c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3C5,1.9,5.9,1,7,1z M7,6 v12h10V6H7z" />
    </g>
  </svg>
)

export { IconChargingStation as default }
