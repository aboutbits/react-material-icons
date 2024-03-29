import React from 'react'
import { IconProps } from './types'

const IconDisplaySettingsSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="1.5" width="8" x="6" y="8.25" />
        <polygon points="16.5,9.75 18,9.75 18,8.25 16.5,8.25 16.5,7 15,7 15,11 16.5,11" />
        <rect height="1.5" width="8" x="10" y="12.25" />
        <polygon points="7.5,15 9,15 9,11 7.5,11 7.5,12.25 6,12.25 6,13.75 7.5,13.75" />
      </g>
    </g>
  </svg>
)

export { IconDisplaySettingsSharp as default }
