import React from 'react'
import { IconProps } from './types'

const IconArrowCircleLeftSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10S17.52,2,12,2C6.48,2,2,6.48,2,12z M12,11l4,0v2l-4,0l0,3l-4-4l4-4L12,11z" />
    </g>
  </svg>
)

export { IconArrowCircleLeftSharp as default }
