import React from 'react'
import { IconProps } from './types'

const IconViewTimelineOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="2" width="6" x="6" y="15" />
        <rect height="2" width="6" x="12" y="7" />
        <rect height="2" width="6" x="9" y="11" />
        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
      </g>
    </g>
  </svg>
)

export { IconViewTimelineOutlined as default }
