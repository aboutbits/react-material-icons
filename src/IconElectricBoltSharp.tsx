import React from 'react'
import { IconProps } from './types'

const IconElectricBoltSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="15,2 2.5,13 13,14 8,21 9,22 21.5,11 11,10 16,3" />
      </g>
    </g>
  </svg>
)

export { IconElectricBoltSharp as default }
