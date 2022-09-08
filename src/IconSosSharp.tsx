import React from 'react'
import { IconProps } from './types'

const IconSosSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M15.5,7h-7v10h7V7z M13.5,15h-3V9h3V15z M1,15h4v-2H1V7h6v2H3v2h4v6H1V15z M17,15h4v-2h-4V7h6v2h-4v2h4v6h-6V15z" />
    </g>
  </svg>
)

export { IconSosSharp as default }
