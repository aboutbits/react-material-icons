import React from 'react'
import { IconProps } from './types'

const IconDataObjectSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="4,10 2,10 2,14 4,14 4,20 10,20 10,18 6,18 6,12.5 4,12.5 4,11.5 6,11.5 6,6 10,6 10,4 4,4" />
        <polygon points="20,10 20,4 14,4 14,6 18,6 18,11.5 20,11.5 20,12.5 18,12.5 18,18 14,18 14,20 20,20 20,14 22,14 22,10" />
      </g>
    </g>
  </svg>
)

export { IconDataObjectSharp as default }
