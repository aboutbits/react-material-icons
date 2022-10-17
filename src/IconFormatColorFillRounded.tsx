import React from 'react'
import { IconProps } from './types'

const IconFormatColorFillRounded: React.FC<IconProps> = ({ ...props }) => (
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
          d="M8.94,16.56C9.23,16.85,9.62,17,10,17s0.77-0.15,1.06-0.44l5.5-5.5 c0.59-0.58,0.59-1.53,0-2.12L8.32,0.7c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1.68,1.68L3.44,8.94 c-0.59,0.59-0.59,1.54,0,2.12L8.94,16.56z M10,5.21L14.79,10H5.21L10,5.21z"
          enableBackground="new"
        />
        <path
          d="M19,17c1.1,0,2-0.9,2-2c0-1.33-2-3.5-2-3.5s-2,2.17-2,3.5C17,16.1,17.9,17,19,17z"
          enableBackground="new"
        />
        <path
          d="M20,20H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h16c1.1,0,2-0.9,2-2S21.1,20,20,20z"
          enableBackground="new"
        />
      </g>
    </g>
  </svg>
)

export { IconFormatColorFillRounded as default }
