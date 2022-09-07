import React from 'react'
import { IconProps } from './types'

const IconSwipeLeftAltOutlined: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M10.1,13c0.46,2.28,2.48,4,4.9,4c2.76,0,5-2.24,5-5s-2.24-5-5-5c-2.42,0-4.44,1.72-4.9,4H5.83l1.59-1.59L6,8l-4,4l4,4 l1.41-1.41L5.83,13H10.1z M15,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S16.66,15,15,15z" />
    </g>
  </svg>
)

export { IconSwipeLeftAltOutlined as default }
