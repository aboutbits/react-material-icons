import React from 'react'
import { IconProps } from './types'

const Icon30fpsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M2,5v3h6v2.5H3v3h5V16H2v3h9V5H2z M19,8v8h-4V8H19 M22,5H12v14h10V5z" />
      </g>
    </g>
  </svg>
)

export { Icon30fpsSharp as default }
