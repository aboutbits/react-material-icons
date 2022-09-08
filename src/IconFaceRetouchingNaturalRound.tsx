import React from 'react'
import { IconProps } from './types'

const IconFaceRetouchingNaturalRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M22.01,4.05L20.6,3.4l-0.65-1.41c-0.18-0.39-0.73-0.39-0.91,0L18.4,3.4l-1.41,0.65c-0.39,0.18-0.39,0.73,0,0.91L18.4,5.6 l0.65,1.41c0.18,0.39,0.73,0.39,0.91,0L20.6,5.6l1.41-0.65C22.4,4.78,22.4,4.22,22.01,4.05z" />
        <circle cx="9" cy="13" r="1.25" />
        <circle cx="15" cy="13" r="1.25" />
        <path d="M19.5,8.8c-0.78,0-1.49-0.46-1.82-1.17l-0.41-0.9l-0.9-0.41C15.66,5.99,15.2,5.28,15.2,4.5c0-0.66,0.34-1.26,0.87-1.63 C14.83,2.32,13.45,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10c0-1.45-0.32-2.83-0.87-4.07 C20.76,8.46,20.16,8.8,19.5,8.8z M12,20c-4.41,0-8-3.59-8-8c0-0.05,0.01-0.1,0-0.14c2.6-0.98,4.69-2.99,5.74-5.55 C11.58,8.56,14.37,10,17.5,10c0.75,0,1.47-0.09,2.17-0.24C19.88,10.47,20,11.22,20,12C20,16.41,16.41,20,12,20z" />
      </g>
    </g>
  </svg>
)

export { IconFaceRetouchingNaturalRound as default }
