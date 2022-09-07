import React from 'react'
import { IconProps } from './types'

const IconTurnSlightLeftSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="11.66,6 11.66,4 6,4 6,9.66 8,9.66 8,7.41 13,12.41 13,20 15,20 15,11.59 9.41,6" />
    </g>
  </svg>
)

export { IconTurnSlightLeftSharp as default }
