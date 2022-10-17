import React from 'react'
import { IconProps } from './types'

const IconHorizontalRuleRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" fillRule="evenodd" height="24" width="24" />
      <g>
        <path
          d="M19,13H5c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v0 C20,12.55,19.55,13,19,13z"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
)

export { IconHorizontalRuleRounded as default }
