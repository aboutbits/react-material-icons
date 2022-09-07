import React from 'react'
import { IconProps } from './types'

const IconFileDownloadDoneOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02" />
        <rect height="2" width="14" x="5" y="18" />
      </g>
    </g>
  </svg>
)

export { IconFileDownloadDoneOutlined as default }
