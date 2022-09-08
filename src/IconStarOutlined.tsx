import React from 'react'
import { IconProps } from './types'

const IconStarOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M0 0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </g>
  </svg>
)

export { IconStarOutlined as default }
