import React from 'react'
import { IconProps } from './types'

const IconViewQuiltTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path
      d="M8.33,17H5V7h3.33V17z M13.67,17h-3.33v-4h3.33V17z M19,17h-3.33v-4H19V17z M19,11h-8.67V7H19V11z"
      opacity=".3"
    />
    <path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33v-4h3.33V17z M19,17h-3.33v-4H19V17z M19,11h-8.67V7H19V11z" />
  </svg>
)

export { IconViewQuiltTwoTone as default }
