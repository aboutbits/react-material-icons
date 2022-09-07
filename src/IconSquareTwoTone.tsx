import React from 'react'
import { IconProps } from './types'

const IconSquareTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="14" width="14" x="5" y="5" />
      </g>
      <g>
        <path d="M3,3v18h18V3H3z M19,19H5V5h14V19z" />
      </g>
    </g>
  </svg>
)

export { IconSquareTwoTone as default }
