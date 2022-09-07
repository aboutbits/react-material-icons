import React from 'react'
import { IconProps } from './types'

const IconCrop54Sharp: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M21,4H3v16h18V4z M19,18H5V6h14V18z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCrop54Sharp as default }
