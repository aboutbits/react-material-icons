import React from 'react'
import { IconProps } from './types'

const IconDoorFrontRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,19h-1V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1 C21,19.45,20.55,19,20,19z M14,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C15,12.55,14.55,13,14,13z" />
    </g>
  </svg>
)

export { IconDoorFrontRounded as default }
