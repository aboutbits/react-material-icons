import React from 'react'
import { IconProps } from './types'

const IconTurnSlightRightSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="12.34,6 12.34,4 18,4 18,9.66 16,9.66 16,7.41 11,12.41 11,20 9,20 9,11.59 14.59,6" />
    </g>
  </svg>
)

export { IconTurnSlightRightSharp as default }
