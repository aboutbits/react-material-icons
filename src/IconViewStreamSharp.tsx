import React from 'react'
import { IconProps } from './types'

const IconViewStreamSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M3,19v-6h18v6H3z M3,5v6h18V5H3z" />
  </svg>
)

export { IconViewStreamSharp as default }
