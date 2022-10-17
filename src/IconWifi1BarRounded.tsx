import React from 'react'
import { IconProps } from './types'

const IconWifi1BarRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <circle cx="12" cy="18" r="2" />
    </g>
  </svg>
)

export { IconWifi1BarRounded as default }
