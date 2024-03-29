import React from 'react'
import { IconProps } from './types'

const IconShop2Sharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="3,9 1,9 1,22 19,22 19,20 3,20" />
        <path d="M18,5V1h-8v4H5v13h18V5H18z M12,3h4v2h-4V3z M12,15V8l5.5,3.5L12,15z" />
      </g>
    </g>
  </svg>
)

export { IconShop2Sharp as default }
