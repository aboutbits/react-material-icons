import React from 'react'
import { IconProps } from './types'

const IconWoman2Sharp: React.FC<IconProps> = ({ ...props }) => (
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
          <polygon points="13.41,7 10.59,7 7,16 10.5,16 10.5,22 13.5,22 13.5,16 17,16" />
          <circle cx="12" cy="4" r="2" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconWoman2Sharp as default }
