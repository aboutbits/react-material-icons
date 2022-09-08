import React from 'react'
import { IconProps } from './types'

const IconSpaceDashboardSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M11,21H3V3h8V21z M13,21h8v-9h-8V21z M21,10V3h-8v7H21z" />
  </svg>
)

export { IconSpaceDashboardSharp as default }
