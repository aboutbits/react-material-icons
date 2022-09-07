import React from 'react'
import { IconProps } from './types'

const IconSmartScreenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <path d="M1,5v14h22V5H1z M18,17H6V7h12V17z" />
        <rect height="1.5" width="1.5" x="12.5" y="11.25" />
        <rect height="1.5" width="1.5" x="15" y="11.25" />
        <rect height="1.5" width="1.5" x="10" y="11.25" />
        <rect height="1.5" width="1.5" x="7.5" y="11.25" />
      </g>
    </g>
  </svg>
)

export { IconSmartScreenSharp as default }
