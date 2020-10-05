import React from 'react'
import { IconProps } from './types'
const IconDragHandle: React.FC<IconProps> = (props: IconProps): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <g>
          <path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconDragHandle }
