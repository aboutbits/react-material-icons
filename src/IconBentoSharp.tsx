import React from 'react'
import { IconProps } from './types'

const IconBentoSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <g>
      <path d="M16,11V5h6v6H16z M16,19h6v-6h-6V19z M14,5v14H2V5H14z M9.5,12c0-0.83-0.67-1.5-1.5-1.5S6.5,11.17,6.5,12s0.67,1.5,1.5,1.5 S9.5,12.83,9.5,12z" />
    </g>
  </svg>
)

export { IconBentoSharp as default }
