import React from 'react'
import { IconProps } from './types'

const IconBorderColorSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path
        d="M22,24H2v-4h20V24z M13.06,5.19l3.75,3.75L7.75,18H4v-3.75L13.06,5.19z M17.88,7.87 l-3.75-3.75l2.53-2.54l3.75,3.75L17.88,7.87z"
        enableBackground="new"
      />
    </g>
  </svg>
)

export { IconBorderColorSharp as default }
