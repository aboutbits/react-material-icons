import React from 'react'
import { IconProps } from './types'

const IconWebSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,4H2v16h20V4z M4,9h10.5v3.5H4V9z M4,14.5h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z" />
    </g>
  </svg>
)

export { IconWebSharp as default }