import React from 'react'
import { IconProps } from './types'

const IconMonitorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g>
        <path d="M22,3H2v15h5l-1,1v2h12v-2l-1-1h5V3z M20,16H4V5h16V16z" />
      </g>
    </g>
  </svg>
)

export { IconMonitorSharp as default }
