import React from 'react'
import { IconProps } from './types'

const IconFolderCopySharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="3,6 1,6 1,21 20,21 20,19 3,19" />
        <path d="M23,4h-9l-2-2H5.01L5,17h18V4z" />
      </g>
    </g>
  </svg>
)

export { IconFolderCopySharp as default }
