import React from 'react'
import { IconProps } from './types'

const Icon4gMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M9,7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7z M17,11v2h2v2h-5V9h7V7h-9v10h9v-6H17z" />
      </g>
    </g>
  </svg>
)

export { Icon4gMobiledataSharp as default }
