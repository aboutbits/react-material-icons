import React from 'react'
import { IconProps } from './types'

const IconBackupTable: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M20,6v14H6v2h14c1.1,0,2-0.9,2-2V6H20z" />
        <path d="M16,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M9,16H4v-5h5V16z M16,16h-5v-5h5 V16z M16,9H4V4h12V9z" />
      </g>
    </g>
  </svg>
)

export { IconBackupTable }
