import React from 'react'
import { IconProps } from './types'

const IconRectangleTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <g opacity=".3">
        <rect height="12" width="16" x="4" y="6" />
      </g>
      <g>
        <path d="M2,4v16h20V4H2z M20,18H4V6h16V18z" />
      </g>
    </g>
  </svg>
)

export { IconRectangleTwoTone as default }
