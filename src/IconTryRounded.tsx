import React from 'react'
import { IconProps } from './types'

const IconTryRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57 l-1.12,2.44c-0.18,0.39-0.73,0.39-0.91,0l-1.12-2.44l-2.44-1.12c-0.39-0.18-0.39-0.73,0-0.91l2.44-1.12l1.12-2.44 c0.18-0.39,0.73-0.39,0.91,0l1.12,2.44l2.44,1.12c0.39,0.18,0.39,0.73,0,0.91L13.57,11.57z" />
    </g>
  </svg>
)

export { IconTryRounded as default }
