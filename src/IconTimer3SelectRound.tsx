import React from 'react'
import { IconProps } from './types'

const IconTimer3SelectRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M21,12L21,12c0,0.55-0.45,1-1,1h-3v1h2.5c0.83,0,1.5,0.68,1.5,1.5v2c0,0.83-0.67,1.5-1.5,1.5H16c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h3v-1h-2.5c-0.82,0-1.5-0.68-1.5-1.5v-2c0-0.82,0.68-1.5,1.5-1.5H20C20.55,11,21,11.45,21,12z M4,6.5L4,6.5 C4,7.33,4.67,8,5.5,8H10v2.5H5.5C4.67,10.5,4,11.17,4,12v0c0,0.83,0.67,1.5,1.5,1.5H10V16H5.5C4.67,16,4,16.67,4,17.5v0 C4,18.33,4.67,19,5.5,19H10c1.66,0,3-1.34,3-3v-1.9c0-1.16-0.94-2.1-2.1-2.1c1.16,0,2.1-0.94,2.1-2.1V8c0-1.66-1.34-3-3-3H5.5 C4.67,5,4,5.67,4,6.5z" />
  </svg>
)

export { IconTimer3SelectRound as default }
