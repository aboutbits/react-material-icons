import React from 'react'
import { IconProps } from './types'

const IconPentagonSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="2,9 6,21 18,21 22,9 12,2" />
    </g>
  </svg>
)

export { IconPentagonSharp as default }
