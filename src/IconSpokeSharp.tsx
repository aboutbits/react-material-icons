import React from 'react'
import { IconProps } from './types'

const IconSpokeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M16,7c0,2.21-1.79,4-4,4S8,9.21,8,7s1.79-4,4-4S16,4.79,16,7z M7,13c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S9.21,13,7,13 z M17,13c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S19.21,13,17,13z" />
  </svg>
)

export { IconSpokeSharp as default }
