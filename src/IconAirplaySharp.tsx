import React from 'react'
import { IconProps } from './types'

const IconAirplaySharp: React.FC<IconProps> = ({ ...props }) => (
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
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M6,22h12l-6-6L6,22z M23,3H1v16h6v-2H3V5h18v12h-4v2h6V3z" />
    </g>
  </svg>
)

export { IconAirplaySharp as default }
