import React from 'react'
import { IconProps } from './types'

const IconCandlestickChartSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <polygon points="9,4 7,4 7,6 5,6 5,18 7,18 7,20 9,20 9,18 11,18 11,6 9,6" />
        </g>
        <g>
          <polygon points="19,8 17,8 17,4 15,4 15,8 13,8 13,15 15,15 15,20 17,20 17,15 19,15" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconCandlestickChartSharp as default }
