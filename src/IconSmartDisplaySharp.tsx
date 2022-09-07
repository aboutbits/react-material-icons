import React from 'react'
import { IconProps } from './types'

const IconSmartDisplaySharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,4H2v16h20V4z M9.5,16.5v-9l7,4.5L9.5,16.5z" />
    </g>
  </svg>
)

export { IconSmartDisplaySharp as default }
