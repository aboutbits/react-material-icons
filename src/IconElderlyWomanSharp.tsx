import React from 'react'
import { IconProps } from './types'

const IconElderlyWomanSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M18.5,11c-1.56,0-2.92-0.9-3.58-2.21l-0.79-1.67l0,0C14.12,7.1,13.63,6,12.34,6l0,0C8.72,6,6,16.69,6,19h2.5l-2.1,2.8 L8,23l3-4h2v4h2v-4.03L13,13l0.49-2.71c0.81,1.23,2.05,2.14,3.51,2.52v0.69h1v-1c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V23h1 V12.5C20,11.67,19.33,11,18.5,11z" />
        <path d="M11.6,2.91c-0.06,0.19-0.1,0.38-0.1,0.59c0,1.1,0.9,2,2,2s2-0.9,2-2c0-1.1-0.9-2-2-2c-0.21,0-0.4,0.04-0.59,0.1 C12.76,1.25,12.41,1,12,1c-0.55,0-1,0.45-1,1C11,2.41,11.25,2.76,11.6,2.91z" />
      </g>
    </g>
  </svg>
)

export { IconElderlyWomanSharp as default }
