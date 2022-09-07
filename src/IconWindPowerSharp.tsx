import React from 'react'
import { IconProps } from './types'

const IconWindPowerSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <rect height="2" width="6" x="4" y="3" />
        </g>
        <g>
          <rect height="2" width="5" x="1" y="7" />
        </g>
        <g>
          <rect height="2" width="5" x="3" y="19" />
        </g>
        <g>
          <path d="M15.32,12.09l5.42-9.04L17.32,1L12,5.97v4.74c0.31-0.13,0.64-0.21,1-0.21C14.06,10.5,14.96,11.16,15.32,12.09z" />
        </g>
        <g>
          <path d="M10.5,13c0-0.82,0.4-1.54,1.01-2H1v4l7,2l3.44-2.06C10.87,14.48,10.5,13.79,10.5,13z" />
        </g>
        <g>
          <path d="M20.17,23L23,20.17l-3.54-6.36l-3.98-1c0,0.06,0.02,0.12,0.02,0.19c0,1.38-1.12,2.5-2.5,2.5c-0.36,0-0.69-0.08-1-0.21V21 c-1.1,0-2,0.9-2,2h6c0-1.1-0.9-2-2-2v-4.17L20.17,23z" />
        </g>
        <g>
          <circle cx="13" cy="13" r="1.5" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconWindPowerSharp as default }
