import React from 'react'
import { IconProps } from './types'

const IconStackedBarChartSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="4" width="4" x="4" y="4" />
        <rect height="4" width="4" x="10" y="7" />
        <rect height="4" width="4" x="16" y="10" />
        <rect height="5" width="4" x="16" y="15" />
        <rect height="8" width="4" x="10" y="12" />
      </g>
    </g>
  </svg>
)

export { IconStackedBarChartSharp as default }
