import React from 'react'
import { IconProps } from './types'

const IconQuickreplyOutlined: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17L4,17.17z" />
        </g>
        <g>
          <polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconQuickreplyOutlined as default }
