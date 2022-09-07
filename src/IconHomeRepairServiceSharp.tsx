import React from 'react'
import { IconProps } from './types'

const IconHomeRepairServiceSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <polygon points="18,16 16,16 16,15 8,15 8,16 6,16 6,15 2,15 2,20 22,20 22,15 18,15" />
        </g>
        <path d="M17,8V4H7v4H2v6h4v-2h2v2h8v-2h2v2h4V8H17z M9,6h6v2H9V6z" />
      </g>
    </g>
  </svg>
)

export { IconHomeRepairServiceSharp as default }
