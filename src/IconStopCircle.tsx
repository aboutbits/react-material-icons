import React from 'react'
import { IconProps } from './types'

const IconStopCircle: React.FC<IconProps> = ({
  title = 'IconStopCircle',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path
        d="M8,16h8V8H8V16z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z"
        fillRule="evenodd"
      />
    </g>
  </svg>
)

export { IconStopCircle as default }
