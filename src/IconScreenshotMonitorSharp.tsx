import React from 'react'
import { IconProps } from './types'

const IconScreenshotMonitorSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M22,3H2v16h6v2h8v-2h6V3z M20,17H4V5h16V17z" />
        <polygon points="6.5,7.5 9,7.5 9,6 5,6 5,10 6.5,10" />
        <polygon points="19,12 17.5,12 17.5,14.5 15,14.5 15,16 19,16" />
      </g>
    </g>
  </svg>
)

export { IconScreenshotMonitorSharp as default }
