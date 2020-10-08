import React from 'react'
import { IconProps } from './types'

const IconMotionPhotosOn: React.FC<IconProps> = ({
  title = 'IconMotionPhotosOn',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" x="0" y="0" />
      <path d="M10,16.5v-9l6,4.5L10,16.5z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-1.19,0.22-2.32,0.6-3.38L4.48,9.3 C4.17,10.14,4,11.05,4,12c0,4.41,3.59,8,8,8s8-3.59,8-8s-3.59-8-8-8c-0.95,0-1.85,0.17-2.69,0.48L8.63,2.59C9.69,2.22,10.82,2,12,2 C17.52,2,22,6.48,22,12z M5.5,4C4.67,4,4,4.67,4,5.5S4.67,7,5.5,7S7,6.33,7,5.5S6.33,4,5.5,4z" />
    </g>
  </svg>
)

export { IconMotionPhotosOn as default }