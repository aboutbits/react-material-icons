import React from 'react'
import { IconProps } from './types'

const IconRMobiledataRounded: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M7.8,7.2l0.65,1.52C8.71,9.33,8.27,10,7.61,10h0c-0.37,0-0.7-0.22-0.85-0.56L5.87,7.33H4v1.75C4,9.59,3.59,10,3.08,10 H2.92C2.41,10,2,9.59,2,9.08V3c0-0.55,0.45-1,1-1h4c1.1,0,2,0.9,2,2v1.33C9,6.13,8.47,6.87,7.8,7.2z M7,4H4v1.33h3V4z" />
      </g>
    </g>
  </svg>
)

export { IconRMobiledataRounded as default }