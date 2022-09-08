import React from 'react'
import { IconProps } from './types'

const IconCrop169Sharp: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M21,7H3v10h18V7z M19,15H5V9h14V15z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCrop169Sharp as default }
