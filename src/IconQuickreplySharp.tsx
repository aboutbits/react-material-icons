import React from 'react'
import { IconProps } from './types'

const IconQuickreplySharp: React.FC<IconProps> = ({ ...props }) => (
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
          <polygon points="22,2 2,2 2,22 6,18 15,18 15,10 22,10" />
        </g>
        <g>
          <polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconQuickreplySharp as default }
