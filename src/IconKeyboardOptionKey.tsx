import React from 'react'
import { IconProps } from './types'

const IconKeyboardOptionKey: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="2" width="6" x="15" y="5" />
        <polygon points="9,5 3,5 3,7 7.85,7 14.77,19 21,19 21,17 15.93,17" />
      </g>
    </g>
  </svg>
)

export { IconKeyboardOptionKey as default }
