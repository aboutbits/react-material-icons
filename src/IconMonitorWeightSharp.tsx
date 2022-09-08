import React from 'react'
import { IconProps } from './types'

const IconMonitorWeightSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <path d="M21,3H3v18h18V3z M14.2,11.2c-3.23,2.43-6.84-1.18-4.4-4.41C13.03,4.37,16.63,7.98,14.2,11.2z" />
        <rect height="1" width="1" x="10" y="8.5" />
        <rect height="1" width="1" x="11.5" y="8.5" />
        <rect height="1" width="1" x="13" y="8.5" />
      </g>
    </g>
  </svg>
)

export { IconMonitorWeightSharp as default }