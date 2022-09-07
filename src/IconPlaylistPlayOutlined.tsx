import React from 'react'
import { IconProps } from './types'

const IconPlaylistPlayOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="2" width="11" x="3" y="10" />
        <rect height="2" width="11" x="3" y="6" />
        <rect height="2" width="7" x="3" y="14" />
        <polygon points="16,13 16,21 22,17" />
      </g>
    </g>
  </svg>
)

export { IconPlaylistPlayOutlined as default }
