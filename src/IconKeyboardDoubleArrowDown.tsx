import React from 'react'
import { IconProps } from './types'

const IconKeyboardDoubleArrowDown: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41" />
        <polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19" />
      </g>
    </g>
  </svg>
)

export { IconKeyboardDoubleArrowDown as default }
