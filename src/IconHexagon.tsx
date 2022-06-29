import React from 'react'
import { IconProps } from './types'

const IconHexagon: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="17.2,3 6.8,3 1.6,12 6.8,21 17.2,21 22.4,12" />
    </g>
  </svg>
)

export { IconHexagon as default }
