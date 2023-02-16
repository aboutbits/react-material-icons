import React from 'react'
import { IconProps } from './types'

const IconInsertEmoticonRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M8.5,8C9.33,8,10,8.67,10,9.5 S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M16.75,14.75C15.8,16.39,14.03,17.5,12,17.5s-3.8-1.11-4.75-2.75 C7.06,14.42,7.31,14,7.69,14h8.62C16.7,14,16.94,14.42,16.75,14.75z M15.5,11c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8 S17,8.67,17,9.5S16.33,11,15.5,11z" />
  </svg>
)

export { IconInsertEmoticonRounded as default }