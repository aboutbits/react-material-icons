import React from 'react'
import { IconProps } from './types'

const IconSingleBed: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,12c0-1.1-0.9-2-2-2V7c0-1.1-0.9-2-2-2H8C6.9,5,6,5.9,6,7v3c-1.1,0-2,0.9-2,2v5h1.33L6,19h1l0.67-2h8.67L17,19h1l0.67-2 H20V12z M16,10h-3V7h3V10z M8,7h3v3H8V7z M6,12h12v3H6V12z" />
    </g>
  </svg>
)

export { IconSingleBed as default }
