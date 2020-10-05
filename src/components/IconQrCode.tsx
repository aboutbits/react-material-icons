import React from 'react'
import { IconProps } from './types'
const IconQrCode: React.FC<IconProps> = (props: IconProps): any => (
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
        <path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
        <path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
        <path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
        <rect height="2" width="2" x="19" y="19" />
        <rect height="2" width="2" x="13" y="13" />
        <rect height="2" width="2" x="15" y="15" />
        <rect height="2" width="2" x="13" y="17" />
        <rect height="2" width="2" x="15" y="19" />
        <rect height="2" width="2" x="17" y="17" />
        <rect height="2" width="2" x="17" y="13" />
        <rect height="2" width="2" x="19" y="15" />
      </g>
    </g>
  </svg>
)

export { IconQrCode }
