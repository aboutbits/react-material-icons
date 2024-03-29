import React from 'react'
import { IconProps } from './types'

const IconPinEndSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M20,12V6H4v12h10l0,2H2V4h20v8H20z M19,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c1.66,0,3-1.34,3-3S20.66,14,19,14z M14.66,8H9 v5.66l2.12-2.12l2.83,2.83l1.41-1.41l-2.83-2.83L14.66,8z" />
  </svg>
)

export { IconPinEndSharp as default }
