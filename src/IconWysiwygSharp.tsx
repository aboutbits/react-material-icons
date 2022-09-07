import React from 'react'
import { IconProps } from './types'

const IconWysiwygSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M17,12H7v-2h10V12z M13,14H7v2h6V14z M21,21H3V3h18V21z M19,7H5v12h14V7z" />
    </g>
  </svg>
)

export { IconWysiwygSharp as default }
