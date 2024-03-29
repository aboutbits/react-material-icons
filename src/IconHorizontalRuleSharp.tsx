import React from 'react'
import { IconProps } from './types'

const IconHorizontalRuleSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect fillRule="evenodd" height="2" width="16" x="4" y="11" />
      </g>
    </g>
  </svg>
)

export { IconHorizontalRuleSharp as default }
