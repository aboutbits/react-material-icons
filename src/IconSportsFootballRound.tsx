import React from 'react'
import { IconProps } from './types'

const IconSportsFootballRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M3.02,15.62c-0.08,2.42,0.32,4.34,0.67,4.69s2.28,0.76,4.69,0.67L3.02,15.62z" />
        <path d="M13.08,3.28C10.75,3.7,8.29,4.62,6.46,6.46s-2.76,4.29-3.18,6.62l7.63,7.63c2.34-0.41,4.79-1.34,6.62-3.18 s2.76-4.29,3.18-6.62L13.08,3.28z M14.8,10.6l-4.2,4.2c-0.39,0.39-1.01,0.39-1.4,0s-0.39-1.01,0-1.4l4.2-4.2 c0.39-0.39,1.01-0.39,1.4,0S15.19,10.21,14.8,10.6z" />
        <path d="M20.98,8.38c0.08-2.42-0.32-4.34-0.67-4.69s-2.28-0.76-4.69-0.67L20.98,8.38z" />
      </g>
    </g>
  </svg>
)

export { IconSportsFootballRound as default }
