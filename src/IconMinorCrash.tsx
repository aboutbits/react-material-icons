import React from 'react'
import { IconProps } from './types'

const IconMinorCrash: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M18.92,9.01C18.72,8.42,18.16,8,17.5,8h-11C5.84,8,5.29,8.42,5.08,9.01L3,15v8c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-1 h12v1c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-8L18.92,9.01z M6.85,10h10.29l1.04,3H5.81L6.85,10z M6,17.5C6,16.67,6.67,16,7.5,16 S9,16.67,9,17.5S8.33,19,7.5,19S6,18.33,6,17.5z M15,17.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,19,16.5,19 S15,18.33,15,17.5z M9.41,5L8,6.41l-3-3L6.41,2L9.41,5z M16,6.41L14.59,5l3-3L19,3.41L16,6.41z M13,5h-2V0h2V5z" />
    </g>
  </svg>
)

export { IconMinorCrash as default }
