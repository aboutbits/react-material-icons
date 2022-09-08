import React from 'react'
import { IconProps } from './types'

const IconDoorBackSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M19,19V3H5v16H3v2h18v-2H19z M11,13H9v-2h2V13z" />
    </g>
  </svg>
)

export { IconDoorBackSharp as default }
