import React from 'react'
import { IconProps } from './types'

const IconPropaneTankSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M4,15v3c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4v-3H4z" />
        <path d="M20,13v-3c0-1.86-1.28-3.41-3-3.86V2H7v4.14c-1.72,0.45-3,2-3,3.86v3H20z M9,4h6v2h-2V5h-2v1H9V4z" />
      </g>
    </g>
  </svg>
)

export { IconPropaneTankSharp as default }
