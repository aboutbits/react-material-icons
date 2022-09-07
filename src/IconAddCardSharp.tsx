import React from 'react'
import { IconProps } from './types'

const IconAddCardSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2.01,4L2,20h12v-2H4v-6h18V4H2.01z M20,8H4V6h16V8z M24,17v2h-3v3h-2v-3h-3v-2h3v-3h2v3H24z" />
    </g>
  </svg>
)

export { IconAddCardSharp as default }
