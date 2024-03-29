import React from 'react'
import { IconProps } from './types'

const IconInstallMobileSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="17,18 7,18 7,6 14,6 14,1 5,1 5,23 19,23 19,16 17,16" />
        <polygon points="18,14 23,9 21.59,7.59 19,10.17 19,3 17,3 17,10.17 14.41,7.59 13,9" />
      </g>
    </g>
  </svg>
)

export { IconInstallMobileSharp as default }
