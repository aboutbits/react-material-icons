import React from 'react'
import { IconProps } from './types'

const IconIronSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M18,6v8h-1V7H7v3h2V9h6v2H6c-2.21,0-4,1.79-4,4v3h15v-2h3V8h2V6H18z" />
  </svg>
)

export { IconIronSharp as default }
