import React from 'react'
import { IconProps } from './types'

const IconSimCardAlertSharp: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M20,2H10L4,8v14h16V2z M13,17h-2v-2h2V17z M13,13h-2V8h2V13z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconSimCardAlertSharp as default }
