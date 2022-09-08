import React from 'react'
import { IconProps } from './types'

const Icon2kSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M21,3H3v18h18V3z M8,12.5v1h3V15H6.5v-3.5h3v-1h-3V9H11v3.5H8z M18,15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25,9H18 l-2.25,3L18,15z" />
    </g>
  </svg>
)

export { Icon2kSharp as default }
