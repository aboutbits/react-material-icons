import React from 'react'
import { IconProps } from './types'

const IconAddRoadOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18" />
        <rect height="9" width="2" x="18" y="4" />
        <rect height="16" width="2" x="4" y="4" />
        <rect height="4" width="2" x="11" y="4" />
        <rect height="4" width="2" x="11" y="10" />
        <rect height="4" width="2" x="11" y="16" />
      </g>
    </g>
  </svg>
)

export { IconAddRoadOutlined as default }
