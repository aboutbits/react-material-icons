import React from 'react'
import { IconProps } from './types'

const IconMarkAsUnreadSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon points="16.23,7 20.35,7 10.5,2 2,6.21 2,17 4,17 4,7.4 10.5,4" />
        <path d="M5,8v13h17V8H5z M20,12l-6.5,3.33L7,12v-2l6.5,3.33L20,10V12z" />
      </g>
    </g>
  </svg>
)

export { IconMarkAsUnreadSharp as default }
