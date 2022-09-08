import React from 'react'
import { IconProps } from './types'

const IconFileDownloadSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M19,9h-4V3H9v6H5l7,7L19,9z M5,18v2h14v-2H5z" />
    </g>
  </svg>
)

export { IconFileDownloadSharp as default }
