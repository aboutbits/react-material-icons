import React from 'react'
import { IconProps } from './types'

const IconMan3Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M14,7h-4C8.9,7,8,7.9,8,9v5c0,0.55,0.45,1,1,1h1v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6h1c0.55,0,1-0.45,1-1V9 C16,7.9,15.1,7,14,7z" />
        <path d="M11.65,5.9L10.1,4.35c-0.2-0.2-0.2-0.51,0-0.71l1.54-1.54c0.2-0.2,0.51-0.2,0.71,0l1.54,1.54c0.2,0.2,0.2,0.51,0,0.71 L12.35,5.9C12.16,6.09,11.84,6.09,11.65,5.9z" />
      </g>
    </g>
  </svg>
)

export { IconMan3Rounded as default }
