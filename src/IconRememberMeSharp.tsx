import React from 'react'
import { IconProps } from './types'

const IconRememberMeSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <path d="M19,1H5v22h14V1z M17,15.21C15.5,14.44,13.8,14,12,14s-3.5,0.44-5,1.21V6h10V15.21z" />
        <circle cx="12" cy="10" r="3" />
      </g>
    </g>
  </svg>
)

export { IconRememberMeSharp as default }
