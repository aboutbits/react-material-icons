import React from 'react'
import { IconProps } from './types'

const IconEMobiledataRound: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M16,8L16,8c0-0.55-0.45-1-1-1H9C8.45,7,8,7.45,8,8v8c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-5v-2h5 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-5V9h5C15.55,9,16,8.55,16,8z" />
      </g>
    </g>
  </svg>
)

export { IconEMobiledataRound as default }
