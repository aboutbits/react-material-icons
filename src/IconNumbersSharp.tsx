import React from 'react'
import { IconProps } from './types'

const IconNumbersSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20.5,10L21,8h-4l1-4h-2l-1,4h-4l1-4h-2L9,8H5l-0.5,2h4l-1,4h-4L3,16h4l-1,4h2l1-4h4l-1,4h2l1-4h4l0.5-2h-4l1-4H20.5z M13.5,14h-4l1-4h4L13.5,14z" />
    </g>
  </svg>
)

export { IconNumbersSharp as default }
