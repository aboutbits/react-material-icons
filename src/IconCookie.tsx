import React from 'react'
import { IconProps } from './types'

const IconCookie: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M21.95,10.99c-1.79-0.03-3.7-1.95-2.68-4.22c-2.98,1-5.77-1.59-5.19-4.56C6.95,0.71,2,6.58,2,12c0,5.52,4.48,10,10,10 C17.89,22,22.54,16.92,21.95,10.99z M8.5,15C7.67,15,7,14.33,7,13.5S7.67,12,8.5,12s1.5,0.67,1.5,1.5S9.33,15,8.5,15z M10.5,10 C9.67,10,9,9.33,9,8.5S9.67,7,10.5,7S12,7.67,12,8.5S11.33,10,10.5,10z M15,16c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C16,15.55,15.55,16,15,16z" />
      </g>
    </g>
  </svg>
)

export { IconCookie as default }
