import React from 'react'
import { IconProps } from './types'

const IconFastForwardSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M4,18l8.5-6L4,6V18z M13,6v12l8.5-6L13,6z" />
    </g>
  </svg>
)

export { IconFastForwardSharp as default }
