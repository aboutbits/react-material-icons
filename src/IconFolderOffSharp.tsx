import React from 'react'
import { IconProps } from './types'

const IconFolderOffSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="12,6 10,4 6.83,4 22,19.17 22,6" />
        <polygon points="2.1,2.1 0.69,3.51 2,4.83 2,20 17.17,20 20.49,23.31 21.9,21.9" />
      </g>
    </g>
  </svg>
)

export { IconFolderOffSharp as default }
