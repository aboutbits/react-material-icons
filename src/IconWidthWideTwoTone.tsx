import React from 'react'
import { IconProps } from './types'

const IconWidthWideTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <rect height="12" opacity=".3" width="8" x="8" y="6" />
        <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M6,18H4V6h2V18z M16,18H8V6h8V18z M20,18h-2V6h2V18z" />
      </g>
    </g>
  </svg>
)

export { IconWidthWideTwoTone as default }
