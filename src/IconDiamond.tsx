import React from 'react'
import { IconProps } from './types'

const IconDiamond: React.FC<IconProps> = ({ ...props }) => (
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
          <polygon points="12.16,3 11.84,3 9.21,8.25 14.79,8.25" />
        </g>
        <g>
          <polygon points="16.46,8.25 21.62,8.25 19,3 13.84,3" />
        </g>
        <g>
          <polygon points="21.38,9.75 12.75,9.75 12.75,20.1" />
        </g>
        <g>
          <polygon points="11.25,20.1 11.25,9.75 2.62,9.75" />
        </g>
        <g>
          <polygon points="7.54,8.25 10.16,3 5,3 2.38,8.25" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconDiamond as default }
