import React from 'react'
import { IconProps } from './types'

const IconInsertPageBreakSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="5" width="16" x="4" y="17" />
        <path d="M20,8l-6-6H4.01l-0.01,9H20V8z M13,9V3.5L18.5,9H13z" />
        <rect height="2" width="6" x="9" y="13" />
        <rect height="2" width="6" x="17" y="13" />
        <rect height="2" width="6" x="1" y="13" />
      </g>
    </g>
  </svg>
)

export { IconInsertPageBreakSharp as default }
