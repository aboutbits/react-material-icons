import React from 'react'
import { IconProps } from './types'

const IconCssSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M9.5,15v-2H11v0.5h2v-1H9.5V9h5v2H13v-0.5h-2v1h3.5V15H9.5z M16,15h5v-3.5h-3.5v-1h2V11H21V9h-5v3.5h3.5v1h-2V13H16V15z M8,11V9H3v6h5v-2H6.5v0.5h-2v-3h2V11H8z" />
    </g>
  </svg>
)

export { IconCssSharp as default }
