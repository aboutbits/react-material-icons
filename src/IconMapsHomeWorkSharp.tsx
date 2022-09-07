import React from 'react'
import { IconProps } from './types'

const IconMapsHomeWorkSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="1,11 1,21 6,21 6,15 10,15 10,21 15,21 15,11 8,6" />
        <path d="M10,3v1.97l7,5V11h2v2h-2v2h2v2h-2v4h6V3H10z M19,9h-2V7h2V9z" />
      </g>
    </g>
  </svg>
)

export { IconMapsHomeWorkSharp as default }
