import React from 'react'
import { IconProps } from './types'

const IconFortSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="21,3 21,5 19,5 19,3 17,3 17,5 15,5 15,3 13,3 13,7 15,9 15,10 9,10 9,9 11,7 11,3 9,3 9,5 7,5 7,3 5,3 5,5 3,5 3,3 1,3 1,7 3,9 3,15 1,17 1,21 10,21 10,16 14,16 14,21 23,21 23,17 21,15 21,9 23,7 23,3" />
      </g>
    </g>
  </svg>
)

export { IconFortSharp as default }