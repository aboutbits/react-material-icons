import React from 'react'
import { IconProps } from './types'

const IconTableRowsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z" />
  </svg>
)

export { IconTableRowsSharp as default }
