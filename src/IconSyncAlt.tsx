import React from 'react'
import { IconProps } from './types'

const IconSyncAlt: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <polygon points="18,12 22,8 18,4 18,7 3,7 3,9 18,9" />
        <polygon points="6,12 2,16 6,20 6,17 21,17 21,15 6,15" />
      </g>
    </g>
  </svg>
)

export { IconSyncAlt as default }
