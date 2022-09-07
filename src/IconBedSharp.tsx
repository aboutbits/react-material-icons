import React from 'react'
import { IconProps } from './types'

const IconBedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0 0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9h-1zm-8-3h6v3h-6V7zm-8 3V7h6v3H5zm-1 5v-3h16v3H4z" />
    </g>
  </svg>
)

export { IconBedSharp as default }
