import React from 'react'
import { IconProps } from './types'

const IconDriveFileMoveRtlSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M22,6H12l-2-2H2v16h20V6z M12,17l-4-4l4-4v3h4v2h-4V17z" />
  </svg>
)

export { IconDriveFileMoveRtlSharp as default }
