import React from 'react'
import { IconProps } from './types'

const IconSouthWestSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z" />
  </svg>
)

export { IconSouthWestSharp as default }
