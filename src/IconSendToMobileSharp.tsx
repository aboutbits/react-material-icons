import React from 'react'
import { IconProps } from './types'

const IconSendToMobileSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="17,18 7,18 7,6 17,6 17,7 19,7 19,1 5,1 5,23 19,23 19,17 17,17" />
        <polygon points="22,12 18,8 18,11 13,11 13,13 18,13 18,16" />
      </g>
    </g>
  </svg>
)

export { IconSendToMobileSharp as default }
