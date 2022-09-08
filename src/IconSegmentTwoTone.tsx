import React from 'react'
import { IconProps } from './types'

const IconSegmentTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M9,18h12v-2H9V18z M3,6v2h18V6H3z M9,13h12v-2H9V13z" />
    </g>
  </svg>
)

export { IconSegmentTwoTone as default }
