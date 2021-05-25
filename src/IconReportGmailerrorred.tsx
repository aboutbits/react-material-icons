import React from 'react'
import { IconProps } from './types'

const IconReportGmailerrorred: React.FC<IconProps> = ({ ...props }) => (
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
          <path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
          <rect height="6" width="2" x="11" y="7" />
          <rect height="2" width="2" x="11" y="15" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconReportGmailerrorred as default }
