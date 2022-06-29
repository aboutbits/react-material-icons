import React from 'react'
import { IconProps } from './types'

const IconDensityMedium: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="2" width="18" x="3" y="3" />
        <rect height="2" width="18" x="3" y="19" />
        <rect height="2" width="18" x="3" y="11" />
      </g>
    </g>
  </svg>
)

export { IconDensityMedium as default }
