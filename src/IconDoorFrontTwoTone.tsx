import React from 'react'
import { IconProps } from './types'

const IconDoorFrontTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M7,19h10V5H7V19z M13,11h2v2h-2V11z" opacity=".3" />
        <rect height="2" width="2" x="13" y="11" />
        <path d="M19,19V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H3v2h18v-2H19z M17,19H7V5h10V19z" />
      </g>
    </g>
  </svg>
)

export { IconDoorFrontTwoTone as default }
