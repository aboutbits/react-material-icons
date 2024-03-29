import React from 'react'
import { IconProps } from './types'

const IconKeyboardDoubleArrowRightSharp: React.FC<IconProps> = ({
  ...props
}) => (
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
        <polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12" />
        <polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12" />
      </g>
    </g>
  </svg>
)

export { IconKeyboardDoubleArrowRightSharp as default }
