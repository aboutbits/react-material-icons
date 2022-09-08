import React from 'react'
import { IconProps } from './types'

const IconCrop169Round: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M19,7H5C3.9,7,3,7.9,3,9v6c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z M19,15H5V9h14V15z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCrop169Round as default }
