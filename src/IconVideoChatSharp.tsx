import React from 'react'
import { IconProps } from './types'

const IconVideoChatSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,2v20l4-4h16V2H2z M17,13l-2-1.99V14H7V6h8v2.99L17,7V13z" />
    </g>
  </svg>
)

export { IconVideoChatSharp as default }
