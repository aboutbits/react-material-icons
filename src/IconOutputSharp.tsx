import React from 'react'
import { IconProps } from './types'

const IconOutputSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="17,17 22,12 17,7 15.59,8.41 18.17,11 9,11 9,13 18.17,13 15.59,15.59" />
        <polygon points="19,19 5,19 5,5 19,5 19,7 21,7 21,3 3,3 3,21 21,21 21,17 19,17" />
      </g>
    </g>
  </svg>
)

export { IconOutputSharp as default }
