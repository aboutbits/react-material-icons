import React from 'react'
import { IconProps } from './types'

const IconBackHandSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M2.21,10.47L5,9.36L7.25,15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0,4.42-3.58,8-8,8c-3.26,0-6.19-1.99-7.4-5.02 L2.21,10.47z" />
  </svg>
)

export { IconBackHandSharp as default }
