import React from 'react'
import { IconProps } from './types'

const IconPlayDisabledSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="16.45,13.62 19,12 8,5 8,5.17" />
        <polygon points="2.81,2.81 1.39,4.22 8,10.83 8,19 12.99,15.82 19.78,22.61 21.19,21.19" />
      </g>
    </g>
  </svg>
)

export { IconPlayDisabledSharp as default }
