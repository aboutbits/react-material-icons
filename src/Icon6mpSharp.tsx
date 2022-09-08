import React from 'react'
import { IconProps } from './types'

const Icon6mpSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="1.5" width="1.5" x="15" y="14" />
        <path d="M3,3v18h18V3H3z M10,5.5h4.5V7h-3v1h3v3.5H10V5.5z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M18,17h-3v1.5 h-1.5v-6H18V17z" />
        <rect height="1.5" width="1.5" x="11.5" y="9" />
      </g>
    </g>
  </svg>
)

export { Icon6mpSharp as default }