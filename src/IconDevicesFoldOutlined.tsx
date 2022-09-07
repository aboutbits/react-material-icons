import React from 'react'
import { IconProps } from './types'

const IconDevicesFoldOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M20,3h-3c0-1.44-1.47-2.4-2.79-1.84l-3,1.29C10.48,2.76,10,3.49,10,4.29V19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M15,16.68l-3,1.29V4.29L15,3V16.68z M20,19h-5.33l1.12-0.48C16.52,18.2,17,17.48,17,16.68V5h3V19z" />
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

export { IconDevicesFoldOutlined as default }
