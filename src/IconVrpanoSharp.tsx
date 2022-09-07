import React from 'react'
import { IconProps } from './types'

const IconVrpanoSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M12,5.5c-5.25,0-9.01-1.54-10-1.92V20.4c2.16-0.76,5.21-1.9,10-1.9c4.78,0,7.91,1.17,10,1.9V3.6 C19.91,4.33,16.77,5.5,12,5.5z M12,15c-2.34,0-4.52,0.15-6.52,0.41l3.69-4.42l2,2.4L14,10l4.51,5.4C16.52,15.15,14.3,15,12,15z" />
    </g>
  </svg>
)

export { IconVrpanoSharp as default }
