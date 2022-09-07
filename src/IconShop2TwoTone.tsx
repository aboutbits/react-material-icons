import React from 'react'
import { IconProps } from './types'

const IconShop2TwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <path
          d="M7,16h14V7H7V16z M12,8l5.5,3.5L12,15V8z"
          enableBackground="new"
          opacity=".3"
        />
        <path d="M3,9H1v11c0,1.11,0.89,2,2,2h16v-2H3V9z" />
        <path d="M18,5V3c0-1.11-0.89-2-2-2h-4c-1.11,0-2,0.89-2,2v2H5v11c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V5H18z M12,3h4v2h-4V3z M21,16H7V7h14V16z" />
        <polygon points="12,8 12,15 17.5,11.5" />
      </g>
    </g>
  </svg>
)

export { IconShop2TwoTone as default }
