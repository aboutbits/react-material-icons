import React from 'react'
import { IconProps } from './types'

const IconVerticalShades: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,19V3H4v16H2v2h20v-2H20z M10,19V5h4v14H10z" />
    </g>
  </svg>
)

export { IconVerticalShades as default }
