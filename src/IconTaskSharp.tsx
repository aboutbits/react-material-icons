import React from 'react'
import { IconProps } from './types'

const IconTaskSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M14,2H4v20h16V8L14,2z M10.94,18L7.4,14.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z M13,9V3.5L18.5,9H13z" />
    </g>
  </svg>
)

export { IconTaskSharp as default }
