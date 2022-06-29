import React from 'react'
import { IconProps } from './types'

const IconSpatialAudio: React.FC<IconProps> = ({ ...props }) => (
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
        <circle cx="10" cy="9" r="4" />
        <path d="M16.39,15.56C14.71,14.7,12.53,14,10,14c-2.53,0-4.71,0.7-6.39,1.56C2.61,16.07,2,17.1,2,18.22V21h16v-2.78 C18,17.1,17.39,16.07,16.39,15.56z" />
        <path d="M16,1h-2c0,4.97,4.03,9,9,9V8C19.14,8,16,4.86,16,1z" />
        <path d="M20,1h-2c0,2.76,2.24,5,5,5V4C21.35,4,20,2.65,20,1z" />
      </g>
    </g>
  </svg>
)

export { IconSpatialAudio as default }
