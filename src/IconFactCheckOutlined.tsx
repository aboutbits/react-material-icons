import React from 'react'
import { IconProps } from './types'

const IconFactCheckOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path
          d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z"
          fillRule="evenodd"
        />
        <polygon
          fillRule="evenodd"
          points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"
        />
        <rect fillRule="evenodd" height="2" width="5" x="5" y="7" />
        <rect fillRule="evenodd" height="2" width="5" x="5" y="11" />
        <rect fillRule="evenodd" height="2" width="5" x="5" y="15" />
      </g>
    </g>
  </svg>
)

export { IconFactCheckOutlined as default }
