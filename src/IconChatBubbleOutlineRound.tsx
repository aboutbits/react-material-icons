import React from 'react'
import { IconProps } from './types'

const IconChatBubbleOutlineRound: React.FC<IconProps> = ({ ...props }) => (
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
      <g enableBackground="new">
        <path d="M20,4v12H5.17L4,17.17V4H20 M20,2H4C2.9,2,2,2.9,2,4v15.59c0,0.89,1.08,1.34,1.71,0.71L6,18h14c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2L20,2z" />
      </g>
    </g>
  </svg>
)

export { IconChatBubbleOutlineRound as default }
