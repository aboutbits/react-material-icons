import React from 'react'
import { IconProps } from './types'

const IconMicExternalOnSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M9.22,7H4.78C4.3,6.47,4,5.77,4,5c0-1.66,1.34-3,3-3s3,1.34,3,3C10,5.77,9.7,6.47,9.22,7z M20,2v20h-2V4h-4v18H6 c0,0,0-1.79,0-4H5L4,8h6L9,18H8v2h4V2H20z" />
      </g>
    </g>
  </svg>
)

export { IconMicExternalOnSharp as default }
