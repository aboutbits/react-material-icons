import React from 'react'
import { IconProps } from './types'

const IconWidthNormalSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,4H2v16h20V4z M4,6h4v12H4V6z M20,18h-4V6h4V18z" />
    </g>
  </svg>
)

export { IconWidthNormalSharp as default }
