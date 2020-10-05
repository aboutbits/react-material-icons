import React from 'react'
import { IconProps } from './types'
const IconDynamicFeed: React.FC<IconProps> = (props: IconProps): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <g>
        <path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
        <path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
        <path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
      </g>
    </g>
    <g display="none">
      <g display="inline" />
      <g display="inline">
        <path d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
        <path d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
        <path d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
      </g>
    </g>
  </svg>
)

export { IconDynamicFeed }
