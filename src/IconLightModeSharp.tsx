import React from 'react'
import { IconProps } from './types'

const IconLightModeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M11,1v4h2V1L11,1z M11,19v4h2v-4L11,19z M23,11l-4,0v2 l4,0V11z M5,11l-4,0l0,2l4,0L5,11z M16.24,17.66l2.47,2.47l1.41-1.41l-2.47-2.47L16.24,17.66z M3.87,5.28l2.47,2.47l1.41-1.41 L5.28,3.87L3.87,5.28z M6.34,16.24l-2.47,2.47l1.41,1.41l2.47-2.47L6.34,16.24z M18.72,3.87l-2.47,2.47l1.41,1.41l2.47-2.47 L18.72,3.87z" />
  </svg>
)

export { IconLightModeSharp as default }
