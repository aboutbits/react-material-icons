import React from 'react'
import { IconProps } from './types'

const IconHMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z" />
      </g>
    </g>
  </svg>
)

export { IconHMobiledataSharp as default }
