import React from 'react'
import { IconProps } from './types'

const Icon3kPlusSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M21,3H3v18h18V3z M10,9v6H5.5v-1.5h3v-1h-2v-1h2v-1h-3V9H10z M16,15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25,9H16l-2.25,3 L16,15z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z" />
    </g>
  </svg>
)

export { Icon3kPlusSharp as default }
