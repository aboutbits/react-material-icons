import React from 'react'
import { IconProps } from './types'

const IconDifference: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M18,23H4c-1.1,0-2-0.9-2-2V7h2v14h14V23z M15,1H8C6.9,1,6.01,1.9,6.01,3L6,17c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V7 L15,1z M16.5,15h-6v-2h6V15z M16.5,9h-2v2h-2V9h-2V7h2V5h2v2h2V9z" />
    </g>
  </svg>
)

export { IconDifference as default }
