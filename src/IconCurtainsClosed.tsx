import React from 'react'
import { IconProps } from './types'

const IconCurtainsClosed: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,19V3H4v16H2v2h20v-2H20z M11,5h2v14h-2V5z" />
    </g>
  </svg>
)

export { IconCurtainsClosed as default }
