import React from 'react'
import { IconProps } from './types'

const IconBookmarkAddedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M19,21l-7-3l-7,3V3h9c-0.63,0.84-1,1.87-1,3c0,2.76,2.24,5,5,5c0.34,0,0.68-0.03,1-0.1V21z M17.83,9L15,6.17l1.41-1.41 l1.41,1.41l3.54-3.54l1.41,1.41L17.83,9z" />
  </svg>
)

export { IconBookmarkAddedSharp as default }
