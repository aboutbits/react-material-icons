import React from 'react'
import { IconProps } from './types'

const IconThumbDownOffAltOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M15,3H6C5.17,3,4.46,3.5,4.16,4.22l-3.02,7.05C1.05,11.5,1,11.74,1,12v2c0,1.1,0.9,2,2,2h6.31l-0.95,4.57l-0.03,0.32 c0,0.41,0.17,0.79,0.44,1.06L9.83,23l6.59-6.59C16.78,16.05,17,15.55,17,15V5C17,3.9,16.1,3,15,3z M15,15l-4.34,4.34L12,14H3v-2 l3-7h9V15z M19,3h4v12h-4V3z" />
      </g>
    </g>
  </svg>
)

export { IconThumbDownOffAltOutlined as default }
