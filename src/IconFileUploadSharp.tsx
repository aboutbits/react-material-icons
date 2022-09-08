import React from 'react'
import { IconProps } from './types'

const IconFileUploadSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M5,10h4v6h6v-6h4l-7-7L5,10z M5,18v2h14v-2H5z" />
    </g>
  </svg>
)

export { IconFileUploadSharp as default }
