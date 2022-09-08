import React from 'react'
import { IconProps } from './types'

const IconVerticalShadesClosedTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="14" opacity=".2" width="1.5" x="9.5" y="5" />
        <rect height="14" opacity=".2" width="1.5" x="6" y="5" />
        <rect height="14" opacity=".2" width="1.5" x="13" y="5" />
        <rect height="14" opacity=".2" width="1.5" x="16.5" y="5" />
        <path d="M20,19V3H4v16H2v2h20v-2H20z M7.5,19H6V5h1.5V19z M11,19H9.5V5H11V19z M14.5,19H13V5h1.5V19z M18,19h-1.5V5H18V19z" />
      </g>
    </g>
  </svg>
)

export { IconVerticalShadesClosedTwoTone as default }
