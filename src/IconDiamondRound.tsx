import React from 'react'
import { IconProps } from './types'

const IconDiamondRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <g>
          <polygon points="12.16,3 11.84,3 9.21,8.25 14.79,8.25" />
        </g>
        <g>
          <path d="M16.46,8.25h5.16l-2.07-4.14C19.21,3.43,18.52,3,17.76,3h-3.93L16.46,8.25z" />
        </g>
        <g>
          <polygon points="21.38,9.75 12.75,9.75 12.75,20.1" />
        </g>
        <g>
          <polygon points="11.25,20.1 11.25,9.75 2.62,9.75" />
        </g>
        <g>
          <path d="M7.54,8.25L10.16,3H6.24C5.48,3,4.79,3.43,4.45,4.11L2.38,8.25H7.54z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconDiamondRound as default }
