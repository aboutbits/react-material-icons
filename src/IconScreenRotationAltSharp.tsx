import React from 'react'
import { IconProps } from './types'

const IconScreenRotationAltSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M4,7.59l6.41-6.41L20.24,11h-2.83L10.4,4L5.41,9H8v2H2V5h2V7.59z M20,19h2v-6h-6v2h2.59l-4.99,5l-7.01-7H3.76l9.83,9.83 L20,16.41V19z" />
    </g>
  </svg>
)

export { IconScreenRotationAltSharp as default }
