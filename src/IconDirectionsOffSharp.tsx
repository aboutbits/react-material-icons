import React from 'react'
import { IconProps } from './types'

const IconDirectionsOffSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="13,7.5 16.5,11 15.17,12.34 18.62,15.79 22.41,12 12.01,1.58 8.21,5.38 13,10.17" />
        <path d="m1.39 4.22 3.99 3.99L1.59 12l10.42 10.4 3.79-3.79 3.99 3.99 1.41-1.41L2.81 2.81 1.39 4.22zm8.6 8.6V15h-2v-4.18l2 2z" />
      </g>
    </g>
  </svg>
)

export { IconDirectionsOffSharp as default }
