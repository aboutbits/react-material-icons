import React from 'react'
import { IconProps } from './types'

const IconViewSidebar: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M16,20H2V4h14V20z M18,8h4V4h-4V8z M18,20h4v-4h-4V20z M18,14h4v-4h-4V14z" />
    </g>
  </svg>
)

export { IconViewSidebar as default }
