import React from 'react'
import { IconProps } from './types'

const IconAccountTreeSharp: React.FC<IconProps> = ({ ...props }) => (
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
    <polygon points="22,11 22,3 15,3 15,6 9,6 9,3 2,3 2,11 9,11 9,8 11,8 11,18 15,18 15,21 22,21 22,13 15,13 15,16 13,16 13,8 15,8 15,11" />
  </svg>
)

export { IconAccountTreeSharp as default }
