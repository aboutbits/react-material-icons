import React from 'react'
import { IconProps } from './types'

const IconViewArray: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21,5h-3v14h3V5z M17,5H7v14h10V5z M6,5H3v14h3V5z" />
  </svg>
)

export { IconViewArray as default }
