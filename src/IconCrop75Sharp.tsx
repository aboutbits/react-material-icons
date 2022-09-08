import React from 'react'
import { IconProps } from './types'

const IconCrop75Sharp: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M21,5H3v14h18V5z M19,17H5V7h14V17z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCrop75Sharp as default }
