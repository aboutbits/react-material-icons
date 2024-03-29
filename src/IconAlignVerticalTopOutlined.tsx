import React from 'react'
import { IconProps } from './types'

const IconAlignVerticalTopOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z" />
  </svg>
)

export { IconAlignVerticalTopOutlined as default }
