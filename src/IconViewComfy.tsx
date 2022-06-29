import React from 'react'
import { IconProps } from './types'

const IconViewComfy: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,4v7h20V4H2z M10,20h12v-7H10V20z M2,20h6v-7H2V20z" />
    </g>
  </svg>
)

export { IconViewComfy as default }
