import React from 'react'
import { IconProps } from './types'

const IconHtmlTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M3.5,9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9z M17.5,9H13c-0.55,0-1,0.45-1,1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5 C18.5,9.45,18.05,9,17.5,9z M11,9H6v1.5h1.75V15h1.5v-4.5H11V9z M24,15v-1.5h-2.5V9H20v6H24z" />
    </g>
  </svg>
)

export { IconHtmlTwoTone as default }
