import React from 'react'
import { IconProps } from './types'

const IconRequestPageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M14,2H4.01L4,22h16V8L14,2z M15,11h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2V11z" />
  </svg>
)

export { IconRequestPageSharp as default }
