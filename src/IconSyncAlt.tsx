import React from 'react'
import { IconProps } from './types'

const IconSyncAlt: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{props.title === undefined ? 'IconSyncAlt' : props.title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <g>
        <path d="M22,8l-4-4v3H3v2h15v3L22,8z" />
        <path d="M2,16l4,4v-3h15v-2H6v-3L2,16z" />
      </g>
    </g>
  </svg>
)

export { IconSyncAlt as default }
