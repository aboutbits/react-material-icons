import React from 'react'
import { IconProps } from './types'

const IconTurnLeftSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="6.83,11 8.41,12.59 7,14 3,10 7,6 8.41,7.41 6.83,9 17,9 17,20 15,20 15,11" />
    </g>
  </svg>
)

export { IconTurnLeftSharp as default }
