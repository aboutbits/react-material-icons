import React from 'react'
import { IconProps } from './types'

const IconSquareOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M3,3v18h18V3H3z M19,19H5V5h14V19z" />
      </g>
    </g>
  </svg>
)

export { IconSquareOutlined as default }
