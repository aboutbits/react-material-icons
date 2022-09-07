import React from 'react'
import { IconProps } from './types'

const IconDataArrayOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4" />
        <polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4" />
      </g>
    </g>
  </svg>
)

export { IconDataArrayOutlined as default }
