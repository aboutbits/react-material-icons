import React from 'react'
import { IconProps } from './types'

const IconEMobiledataTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z" />
      </g>
    </g>
  </svg>
)

export { IconEMobiledataTwoTone as default }
