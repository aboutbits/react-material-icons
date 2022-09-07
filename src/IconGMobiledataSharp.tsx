import React from 'react'
import { IconProps } from './types'

const IconGMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M12,11v2h2v2H9V9h7V7H7v10h9v-6H12z" />
      </g>
    </g>
  </svg>
)

export { IconGMobiledataSharp as default }
