import React from 'react'
import { IconProps } from './types'

const IconRectangleOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M2,4v16h20V4H2z M20,18H4V6h16V18z" />
      </g>
    </g>
  </svg>
)

export { IconRectangleOutlined as default }
