import React from 'react'
import { IconProps } from './types'

const IconFormatColorFillSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <path
          d="M10,17.62L17.62,10l-10-10L6.21,1.41l2.38,2.38L2.38,10L10,17.62z M10,5.21L14.79,10H5.21 L10,5.21z"
          enableBackground="new"
        />
        <path
          d="M19,17c1.1,0,2-0.9,2-2c0-1.33-2-3.5-2-3.5s-2,2.17-2,3.5C17,16.1,17.9,17,19,17z"
          enableBackground="new"
        />
        <rect enableBackground="new" height="4" width="20" x="2" y="20" />
      </g>
    </g>
  </svg>
)

export { IconFormatColorFillSharp as default }
