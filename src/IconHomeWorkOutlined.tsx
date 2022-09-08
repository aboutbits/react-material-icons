import React from 'react'
import { IconProps } from './types'

const IconHomeWorkOutlined: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-6.97l5-3.57l5,3.57V19z" />
        <rect height="2" width="2" x="17" y="7" />
        <rect height="2" width="2" x="17" y="11" />
        <rect height="2" width="2" x="17" y="15" />
        <polygon points="10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3" />
      </g>
    </g>
  </svg>
)

export { IconHomeWorkOutlined as default }