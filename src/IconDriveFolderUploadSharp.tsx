import React from 'react'
import { IconProps } from './types'

const IconDriveFolderUploadSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,6H12l-2-2H2v16h20V6z M13,13v4h-2v-4H8l4.01-4L16,13H13z" />
    </g>
  </svg>
)

export { IconDriveFolderUploadSharp as default }
