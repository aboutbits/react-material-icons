import React from 'react'
import { IconProps } from './types'

const Icon5kPlusSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M21,3H3v18h18V3z M10,10.5H7.5v1H10V15H6v-1.5h2.5v-1H6V9h4V10.5z M16,15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25,9H16 l-2.25,3L16,15z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z" />
    </g>
  </svg>
)

export { Icon5kPlusSharp as default }
