import React from 'react'
import { IconProps } from './types'

const IconLogoutSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <polygon points="5,5 12,5 12,3 3,3 3,21 12,21 12,19 5,19" />
        <polygon points="21,12 17,8 17,11 9,11 9,13 17,13 17,16" />
      </g>
    </g>
  </svg>
)

export { IconLogoutSharp as default }
