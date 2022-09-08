import React from 'react'
import { IconProps } from './types'

const IconMpSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M21,3H3v18h18V3z M6,9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6V9z M15,15h-1.5V9H18v4.5h-3V15z M15,12h1.5v-1.5H15V12z" />
      </g>
    </g>
  </svg>
)

export { IconMpSharp as default }