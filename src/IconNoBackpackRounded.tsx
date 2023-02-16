import React from 'react'
import { IconProps } from './types'

const IconNoBackpackRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" y="0" />
    <g>
      <g>
        <path d="M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V3.5C7,2.67,7.67,2,8.5,2S10,2.67,10,3.5V4h4V3.5C14,2.67,14.67,2,15.5,2 S17,2.67,17,3.5v0.64c1.72,0.45,3,2,3,3.86v9.17l-2.03-2.03C17.98,15.09,18,15.05,18,15v-2c0-0.55-0.45-1-1-1h-2.17L6.98,4.15z M20.49,21.9c-0.39,0.39-1.02,0.39-1.41,0l-0.14-0.14C18.65,21.91,18.34,22,18,22H6c-1.1,0-2-0.9-2-2V8 c0-0.36,0.06-0.69,0.15-1.02L2.1,4.93c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l16.97,16.97 C20.88,20.88,20.88,21.51,20.49,21.9z M11.17,14l-2-2H7c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1H11.17z" />
      </g>
    </g>
  </svg>
)

export { IconNoBackpackRounded as default }