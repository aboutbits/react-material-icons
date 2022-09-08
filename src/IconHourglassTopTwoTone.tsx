import React from 'react'
import { IconProps } from './types'

const IconHourglassTopTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon opacity=".3" points="8,7.5 12,11.5 16,7.5 16,4 8,4" />
        <polygon opacity=".3" points="8,7.5 12,11.5 16,7.5 16,4 8,4" />
        <path d="M18,2H6v6l4,4l-3.99,4.01L6,22h12l-0.01-5.99L14,12l4-3.99V2z M16,16.5V20H8v-3.5l4-4L16,16.5z M16,7.5l-4,4l-4-4V4h8V7.5 z" />
      </g>
    </g>
  </svg>
)

export { IconHourglassTopTwoTone as default }
