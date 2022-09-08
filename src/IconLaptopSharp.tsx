import React from 'react'
import { IconProps } from './types'

const IconLaptopSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <path d="M20,18l2-2V4H2v12l2,2H0v2h24v-2H20z M4,6h16v10H4V6z" />
      </g>
    </g>
  </svg>
)

export { IconLaptopSharp as default }
