import React from 'react'
import { IconProps } from './types'

const IconSignalCellularAlt1BarSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M5,14h3v6H5V14z" />
    </g>
  </svg>
)

export { IconSignalCellularAlt1BarSharp as default }
