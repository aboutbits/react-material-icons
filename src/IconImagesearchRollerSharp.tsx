import React from 'react'
import { IconProps } from './types'

const IconImagesearchRollerSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M20,2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2H20z" />
      </g>
    </g>
  </svg>
)

export { IconImagesearchRollerSharp as default }
