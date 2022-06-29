import React from 'react'
import { IconProps } from './types'

const IconFlagCircle: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M18,15h-5l-1-2H9.5v5H8V7h6l1,2h3V15 z" />
      </g>
    </g>
  </svg>
)

export { IconFlagCircle as default }
