import React from 'react'
import { IconProps } from './types'

const IconBarChart: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="11" width="4" x="4" y="9" />
        <rect height="7" width="4" x="16" y="13" />
        <rect height="16" width="4" x="10" y="4" />
      </g>
    </g>
  </svg>
)

export { IconBarChart as default }
