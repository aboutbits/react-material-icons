import React from 'react'
import { IconProps } from './types'

const IconSevereColdRound: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M20,2c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1V3C21,2.45,20.55,2,20,2z" />
        <circle cx="20" cy="9" r="1" />
        <path d="M12,10.41l3.29-3.29c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0L12,7.59V5c0-0.55-0.45-1-1-1h0 c-0.55,0-1,0.45-1,1v2.59L8.12,5.71c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41L10,10.41V12H8.41L5.12,8.71 c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41L5.59,12H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2.59l-1.88,1.88 c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0L8.41,14H10v1.59l-3.29,3.29c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0L10,18.41V21c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-2.59l1.88,1.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41L12,15.59V14h1.59l3.29,3.29c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L16.41,14H19 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-7V10.41z" />
      </g>
    </g>
  </svg>
)

export { IconSevereColdRound as default }