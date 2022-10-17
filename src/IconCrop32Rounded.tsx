import React from 'react'
import { IconProps } from './types'

const IconCrop32Rounded: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M19,6H5C3.9,6,3,6.9,3,8v8c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M19,16H5V8h14V16z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCrop32Rounded as default }
