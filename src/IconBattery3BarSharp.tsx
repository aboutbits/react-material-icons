import React from 'react'
import { IconProps } from './types'

const IconBattery3BarSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M17,4v18H7V4h3V2h4v2H17z M15,6H9v8h6V6z" />
    </g>
  </svg>
)

export { IconBattery3BarSharp as default }
