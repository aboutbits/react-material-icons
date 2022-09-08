import React from 'react'
import { IconProps } from './types'

const IconBackupTableSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="20,6 20,20 6,20 6,22 22,22 22,6" />
        <path d="M18,2H2v16h16V2z M9,16H4v-5h5V16z M16,16h-5v-5h5V16z M16,9H4V4h12V9z" />
      </g>
    </g>
  </svg>
)

export { IconBackupTableSharp as default }
