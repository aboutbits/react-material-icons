import React from 'react'
import { IconProps } from './types'

const IconDevicesFoldSharp: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M17,3v-3.03l-7,3V3v18h12V3H17z M20,19h-5.33L17,18V5h3V19z" />
        </g>
        <g>
          <rect height="2" width="2" x="2" y="3" />
        </g>
        <g>
          <rect height="2" width="2" x="2" y="19" />
        </g>
        <g>
          <rect height="2" width="2" x="2" y="15" />
        </g>
        <g>
          <rect height="2" width="2" x="2" y="11" />
        </g>
        <g>
          <rect height="2" width="2" x="2" y="7" />
        </g>
        <g>
          <rect height="2" width="2" x="6" y="3" />
        </g>
        <g>
          <rect height="2" width="2" x="6" y="19" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconDevicesFoldSharp as default }
