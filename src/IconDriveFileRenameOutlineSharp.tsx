import React from 'react'
import { IconProps } from './types'

const IconDriveFileRenameOutlineSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="15,16 11,20 21,20 21,16" />
        <polygon points="12.06,7.19 3,16.25 3,20 6.75,20 15.81,10.94" />
        <rect
          height="5.3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 8.257289e-03 13.4765)"
          width="3.59"
          x="14.48"
          y="4.08"
        />
      </g>
    </g>
  </svg>
)

export { IconDriveFileRenameOutlineSharp as default }
