import React from 'react'
import { IconProps } from './types'

const Icon1kOutlined: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
          <polygon points="8.5,15 10,15 10,9 7,9 7,10.5 8.5,10.5" />
          <polygon points="13.5,12.75 15.25,15 17,15 14.75,12 17,9 15.25,9 13.5,11.25 13.5,9 12,9 12,15 13.5,15" />
        </g>
      </g>
    </g>
  </svg>
)

export { Icon1kOutlined as default }
