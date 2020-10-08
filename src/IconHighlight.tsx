import React from 'react'
import { IconProps } from './types'

const IconHighlight: React.FC<IconProps> = ({
  title = 'IconHighlight',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <g>
          <path d="M6,14l3,3v5h6v-5l3-3V9H6V14z M11,2h2v3h-2V2z M3.5,5.88l1.41-1.41l2.12,2.12L5.62,8L3.5,5.88z M16.96,6.59l2.12-2.12 l1.41,1.41L18.38,8L16.96,6.59z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconHighlight as default }
