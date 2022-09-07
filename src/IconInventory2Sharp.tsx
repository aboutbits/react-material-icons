import React from 'react'
import { IconProps } from './types'

const IconInventory2Sharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,2v6.7h1V22h18V8.7h1V2H2z M15,14H9v-2h6V14z M20,7H4V4h16V7z" />
    </g>
  </svg>
)

export { IconInventory2Sharp as default }
