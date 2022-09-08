import React from 'react'
import { IconProps } from './types'

const IconSouthEastSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z" />
  </svg>
)

export { IconSouthEastSharp as default }
