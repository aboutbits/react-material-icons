import React from 'react'
import { IconProps } from './types'

const IconSignalCellularAlt1BarRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M6.5,20C5.67,20,5,19.33,5,18.5v-3C5,14.67,5.67,14,6.5,14S8,14.67,8,15.5v3C8,19.33,7.33,20,6.5,20z" />
    </g>
  </svg>
)

export { IconSignalCellularAlt1BarRound as default }
