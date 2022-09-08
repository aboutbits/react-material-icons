import React from 'react'
import { IconProps } from './types'

const IconDeblurSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M12,3v18c4.97,0,9-4.03,9-9C21,7.03,16.97,3,12,3z" />
        <circle cx="6" cy="14" r="1" />
        <circle cx="6" cy="18" r="1" />
        <circle cx="6" cy="10" r="1" />
        <circle cx="3" cy="10" r=".5" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="3" cy="14" r=".5" />
        <circle cx="10" cy="21" r=".5" />
        <circle cx="10" cy="3" r=".5" />
        <circle cx="10" cy="6" r="1" />
        <circle cx="10" cy="14" r="1.5" />
        <circle cx="10" cy="10" r="1.5" />
        <circle cx="10" cy="18" r="1" />
      </g>
    </g>
  </svg>
)

export { IconDeblurSharp as default }
