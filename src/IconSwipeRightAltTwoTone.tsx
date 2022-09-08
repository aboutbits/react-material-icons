import React from 'react'
import { IconProps } from './types'

const IconSwipeRightAltTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <circle cx="9" cy="12" opacity=".3" r="3" />
      <path d="M13.9,11C13.44,8.72,11.42,7,9,7c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h4.27l-1.59,1.59L18,16l4-4l-4-4 l-1.41,1.41L18.17,11H13.9z M9,9c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S7.34,9,9,9z" />
    </g>
  </svg>
)

export { IconSwipeRightAltTwoTone as default }
