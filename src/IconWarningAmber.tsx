import React from 'react'
import { IconProps } from './types'

const IconWarningAmber: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
          <polygon points="13,16 11,16 11,18 13,18" />
          <polygon points="13,10 11,10 11,15 13,15" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconWarningAmber as default }
