import React from 'react'
import { IconProps } from './types'

const IconTabletAndroid: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M18,0H6C4.34,0,3,1.34,3,3v18c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V3C21,1.34,19.66,0,18,0z M14,22h-4v-1h4V22z M19.25,19H4.75V3h14.5V19z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconTabletAndroid as default }
