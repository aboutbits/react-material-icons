import React from 'react'
import { IconProps } from './types'

const IconHeadphonesBatterySharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="20,7 20,6 18,6 18,7 16,7 16,18 22,18 22,7" />
        <path d="M8,6c-3.31,0-6,2.69-6,6v6h4v-5H3.5v-1c0-2.48,2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5v1H10v5h4v-6C14,8.69,11.31,6,8,6z" />
      </g>
    </g>
  </svg>
)

export { IconHeadphonesBatterySharp as default }