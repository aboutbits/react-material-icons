import React from 'react'
import { IconProps } from './types'

const IconSignalCellular0BarSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,22h20V2L2,22z M20,20H6.83L20,6.83V20z" />
    </g>
  </svg>
)

export { IconSignalCellular0BarSharp as default }
