import React from 'react'
import { IconProps } from './types'

const IconSwipeUpAltTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <circle cx="12" cy="15" opacity=".3" r="3" />
      <path d="M13,5.83l1.59,1.59L16,6l-4-4L8,6l1.41,1.41L11,5.83v4.27c-2.28,0.46-4,2.48-4,4.9c0,2.76,2.24,5,5,5s5-2.24,5-5 c0-2.42-1.72-4.44-4-4.9V5.83z M12,18c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,18,12,18z" />
    </g>
  </svg>
)

export { IconSwipeUpAltTwoTone as default }
