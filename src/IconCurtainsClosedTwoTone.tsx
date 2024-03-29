import React from 'react'
import { IconProps } from './types'

const IconCurtainsClosedTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="14" opacity=".3" width="3" x="6" y="5" />
        <rect height="14" opacity=".3" width="3" x="15" y="5" />
        <path d="M20,19V3H4v16H2v2h20v-2H20z M9,19H6V5h3V19z M13,19h-2V5h2V19z M18,19h-3V5h3V19z" />
      </g>
    </g>
  </svg>
)

export { IconCurtainsClosedTwoTone as default }
