import React from 'react'
import { IconProps } from './types'

const IconHideImageSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="21,3 5.83,3 21,18.17" />
        <path d="M2.81,2.81L1.39,4.22L3,5.83V21h15.17l1.61,1.61l1.41-1.41L2.81,2.81z M6,17l3-4l2.25,3l0.82-1.1l2.1,2.1H6z" />
      </g>
    </g>
  </svg>
)

export { IconHideImageSharp as default }
