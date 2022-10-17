import React from 'react'
import { IconProps } from './types'

const IconMaleRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M19,4h-4c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1.58l-3.97,3.97C11.73,9.36,10.66,9,9.5,9C6.46,9,4,11.46,4,14.5 C4,17.54,6.46,20,9.5,20s5.5-2.46,5.5-5.5c0-1.16-0.36-2.23-0.97-3.12L18,7.42V9c0,0.55,0.45,1,1,1s1-0.45,1-1V5 C20,4.45,19.55,4,19,4z M9.5,18C7.57,18,6,16.43,6,14.5C6,12.57,7.57,11,9.5,11s3.5,1.57,3.5,3.5C13,16.43,11.43,18,9.5,18z" />
  </svg>
)

export { IconMaleRounded as default }
