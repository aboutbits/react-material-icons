import React from 'react'
import { IconProps } from './types'

const Icon3kSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M21,3H3v18h18V3z M11,9v6H6.5v-1.5h3v-1h-2v-1h2v-1h-3V9H11z M18,15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25,9H18l-2.25,3 L18,15z" />
    </g>
  </svg>
)

export { Icon3kSharp as default }
