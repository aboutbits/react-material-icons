import React from 'react'
import { IconProps } from './types'

const IconMarginOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M3,3v18h18V3H3z M19,19H5V5h14V19z M11,7h2v2h-2V7z M7,7h2v2H7V7z M15,7h2v2h-2V7z M7,11h2v2H7V11z M11,11h2v2h-2V11z M15,11h2v2h-2V11z" />
      </g>
    </g>
  </svg>
)

export { IconMarginOutlined as default }
