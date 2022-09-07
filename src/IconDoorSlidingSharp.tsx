import React from 'react'
import { IconProps } from './types'

const IconDoorSlidingSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M20,19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2H20z M10,13H8v-2h2V13z M16,13h-2v-2h2V13z" />
    </g>
  </svg>
)

export { IconDoorSlidingSharp as default }
