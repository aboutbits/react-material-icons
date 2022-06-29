import React from 'react'
import { IconProps } from './types'

const IconTornado: React.FC<IconProps> = ({ ...props }) => (
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
          <polygon points="20.11,8 23,3 1,3 3.89,8" />
        </g>
        <g>
          <polygon points="7.95,15 12,22 16.05,15" />
        </g>
        <g>
          <polygon points="18.95,10 5.05,10 6.79,13 17.21,13" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconTornado as default }
