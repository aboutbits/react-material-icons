import React from 'react'
import { IconProps } from './types'

const IconBookmarkRemoveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21,7h-6V5h6V7z M19,10.9c-0.64,0.13-1.32,0.14-2.02,0c-1.91-0.38-3.47-1.92-3.87-3.83C12.79,5.54,13.18,4.1,14,3L5,3v18 l7-3l7,3V10.9z" />
  </svg>
)

export { IconBookmarkRemoveSharp as default }
