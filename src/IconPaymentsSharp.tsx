import React from 'react'
import { IconProps } from './types'

const IconPaymentsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M23,7v13H4v-2h17V7H23z M19,16H1V4h18V16z M13,10c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,11.66,13,10z" />
    </g>
  </svg>
)

export { IconPaymentsSharp as default }