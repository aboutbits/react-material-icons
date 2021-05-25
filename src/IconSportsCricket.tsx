import React from 'react'
import { IconProps } from './types'

const IconSportsCricket: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M15.05,12.81L6.56,4.32c-0.39-0.39-1.02-0.39-1.41,0L2.32,7.15c-0.39,0.39-0.39,1.02,0,1.41l8.49,8.49 c0.39,0.39,1.02,0.39,1.41,0l2.83-2.83C15.44,13.83,15.44,13.2,15.05,12.81z" />
          <rect
            height="6"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.5264 17.7562)"
            width="2"
            x="16.17"
            y="16.17"
          />
        </g>
        <circle cx="18.5" cy="5.5" r="3.5" />
      </g>
    </g>
  </svg>
)

export { IconSportsCricket as default }
