import React from 'react'
import { IconProps } from './types'

const IconCrop32Sharp: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M21,6H3v12h18V6z M19,16H5V8h14V16z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCrop32Sharp as default }
