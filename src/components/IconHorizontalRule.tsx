import React from 'react'
import { IconProps } from './types'
const IconHorizontalRule: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" fill-rule="evenodd" height="24" width="24" />
      <rect fill-rule="evenodd" height="2" width="16" x="4" y="11" />
    </g>
  </svg>
)

export { IconHorizontalRule }