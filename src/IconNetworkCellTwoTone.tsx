import React from 'react'
import { IconProps } from './types'

const IconNetworkCellTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z" />
    </g>
  </svg>
)

export { IconNetworkCellTwoTone as default }
