import React from 'react'
import { IconProps } from './types'

const IconAddChartSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="19,19 5,19 5,5 14,5 14,3 3,3 3,21 21,21 21,10 19,10" />
        <rect height="10" width="2" x="11" y="7" />
        <rect height="4" width="2" x="15" y="13" />
        <rect height="7" width="2" x="7" y="10" />
        <polygon points="19,5 19,3 17,3 17,5 15,5 15,7 17,7 17,9 19,9 19,7 21,7 21,5" />
      </g>
    </g>
  </svg>
)

export { IconAddChartSharp as default }
