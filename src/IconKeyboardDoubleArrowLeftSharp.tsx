import React from 'react'
import { IconProps } from './types'

const IconKeyboardDoubleArrowLeftSharp: React.FC<IconProps> = ({
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
        <polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12" />
        <polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12" />
      </g>
    </g>
  </svg>
)

export { IconKeyboardDoubleArrowLeftSharp as default }
