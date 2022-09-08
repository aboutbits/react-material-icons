import React from 'react'
import { IconProps } from './types'

const IconHelpCenterSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M21,3H3v18h18V3z M12.01,18c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25c0.71,0,1.25,0.54,1.25,1.25 C13.25,17.43,12.72,18,12.01,18z M15.02,10.6c-0.76,1.11-1.48,1.46-1.87,2.17c-0.16,0.29-0.22,0.48-0.22,1.41h-1.82 c0-0.49-0.08-1.29,0.31-1.98c0.49-0.87,1.42-1.39,1.96-2.16c0.57-0.81,0.25-2.33-1.37-2.33c-1.06,0-1.58,0.8-1.8,1.48L8.56,8.49 C9.01,7.15,10.22,6,11.99,6c1.48,0,2.49,0.67,3.01,1.52C15.44,8.24,15.7,9.59,15.02,10.6z" />
    </g>
  </svg>
)

export { IconHelpCenterSharp as default }