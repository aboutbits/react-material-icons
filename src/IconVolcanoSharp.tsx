import React from 'react'
import { IconProps } from './types'

const IconVolcanoSharp: React.FC<IconProps> = ({ ...props }) => (
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
          <polygon points="18,8 11,8 9,13 6,13 2,22 22,22" />
        </g>
        <g>
          <rect height="4" width="2" x="13" y="1" />
        </g>
        <g>
          <rect
            height="2"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)"
            width="4"
            x="16.24"
            y="3.76"
          />
        </g>
        <g>
          <rect
            height="4"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)"
            width="2"
            x="8.76"
            y="2.76"
          />
        </g>
      </g>
    </g>
  </svg>
)

export { IconVolcanoSharp as default }
