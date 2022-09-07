import React from 'react'
import { IconProps } from './types'

const IconChargingStationSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M14.5,11l-3,6v-4h-2l3-6v4H14.5z M5,1h14v22H5V1z M7,6v12h10V6H7z" />
    </g>
  </svg>
)

export { IconChargingStationSharp as default }
