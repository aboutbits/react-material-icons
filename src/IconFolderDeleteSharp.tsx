import React from 'react'
import { IconProps } from './types'

const IconFolderDeleteSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M22,6v14H2V4h8l2,2H22z M16.5,10V9h-2v1H12v1.5h1V17h5v-5.5h1V10H16.5z M16.5,15.5h-2v-4h2V15.5z" />
    </g>
  </svg>
)

export { IconFolderDeleteSharp as default }
