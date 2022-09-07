import React from 'react'
import { IconProps } from './types'

const IconEdgesensorLowSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M2,7h2v7H2V7z M20,10h2v7h-2V10z M6,2v20h12V2H6z M16,17H8V7h8V17z" />
      </g>
    </g>
  </svg>
)

export { IconEdgesensorLowSharp as default }
