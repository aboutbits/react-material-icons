import React from 'react'
import { IconProps } from './types'

const IconPunchClockSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <path d="M21,6h-3V1H6v5H3v16h18V6z M8,3h8v3H8V3z M12,19c-2.76,0-5-2.24-5-5s2.24-5,5-5c2.76,0,5,2.24,5,5S14.76,19,12,19z" />
        <polygon points="12.5,11.5 11.5,11.5 11.5,14.21 13.14,15.85 13.85,15.14 12.5,13.79" />
      </g>
    </g>
  </svg>
)

export { IconPunchClockSharp as default }
