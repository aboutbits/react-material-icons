import React from 'react'
import { IconProps } from './types'

const IconCleaningServicesTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="8" opacity=".3" width="2" x="11" y="3" />
        <path
          d="M16,13H8c-1.65,0-3,1.35-3,3v5h2v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h2v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h2 v-3c0-0.55,0.45-1,1-1s1,0.45,1,1v3h2v-5C19,14.35,17.65,13,16,13z"
          opacity=".3"
        />
        <path d="M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z" />
      </g>
    </g>
  </svg>
)

export { IconCleaningServicesTwoTone as default }
