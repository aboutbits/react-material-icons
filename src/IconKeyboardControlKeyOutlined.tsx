import React from 'react'
import { IconProps } from './types'

const IconKeyboardControlKeyOutlined: React.FC<IconProps> = ({ ...props }) => (
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
      <polygon points="5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5" />
    </g>
  </svg>
)

export { IconKeyboardControlKeyOutlined as default }
