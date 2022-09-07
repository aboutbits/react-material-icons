import React from 'react'
import { IconProps } from './types'

const IconCommentBankSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M2,2v20l4-4h16V2H2z M19,13l-2.5-1.5L14,13V5h5V13z" />
    </g>
  </svg>
)

export { IconCommentBankSharp as default }
