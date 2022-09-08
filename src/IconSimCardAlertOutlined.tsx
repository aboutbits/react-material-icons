import React from 'react'
import { IconProps } from './types'

const IconSimCardAlertOutlined: React.FC<IconProps> = ({ ...props }) => (
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
          <g>
            <path d="M18,2h-8L4.02,8L4,20c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V8.83L10.83,4H18V20z" />
            <rect height="2" width="2" x="11" y="15" />
            <rect height="5" width="2" x="11" y="8" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export { IconSimCardAlertOutlined as default }
