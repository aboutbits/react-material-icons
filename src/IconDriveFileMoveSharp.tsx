import React from 'react'
import { IconProps } from './types'

const IconDriveFileMoveSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,6H12l-2-2H2v16h20V6z M12,17v-3H8v-2h4V9l4,4L12,17z" />
    </g>
  </svg>
)

export { IconDriveFileMoveSharp as default }
