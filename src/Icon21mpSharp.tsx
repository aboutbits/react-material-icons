import React from 'react'
import { IconProps } from './types'

const Icon21mpSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M3,3v18h18V3H3z M7.5,8h3V7h-3V5.5H12V9H9v1h3v1.5H7.5V8z M12.5,18.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5V18.5z M13,5.5h3 v6h-1.5V7H13V5.5z M18,17h-3v1.5h-1.5v-6H18V17z" />
      </g>
    </g>
  </svg>
)

export { Icon21mpSharp as default }
