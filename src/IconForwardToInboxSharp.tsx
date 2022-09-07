import React from 'react'
import { IconProps } from './types'

const IconForwardToInboxSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M22,4H2v16h11v-2H4V8l8,5l8-5v5h2V4z M12,11L4,6h16L12,11z M19,15l4,4l-4,4v-3h-4v-2h4V15z" />
    </g>
  </svg>
)

export { IconForwardToInboxSharp as default }
