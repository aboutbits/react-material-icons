import React from 'react'
import { IconProps } from './types'

const IconHeightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <path d="M13,6.99h1.79c0.45,0,0.67-0.54,0.35-0.85l-2.79-2.78c-0.2-0.19-0.51-0.19-0.71,0L8.86,6.14C8.54,6.45,8.76,6.99,9.21,6.99 H11v10.02H9.21c-0.45,0-0.67,0.54-0.35,0.85l2.79,2.78c0.2,0.19,0.51,0.19,0.71,0l2.79-2.78c0.32-0.31,0.09-0.85-0.35-0.85H13V6.99 z" />
    </g>
  </svg>
)

export { IconHeightRounded as default }
