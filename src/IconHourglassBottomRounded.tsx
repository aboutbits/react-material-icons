import React from 'react'
import { IconProps } from './types'

const IconHourglassBottomRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M16,22c1.1,0,2-0.9,2-2l-0.01-3.18c0-0.53-0.21-1.03-0.58-1.41L14,12l3.41-3.43c0.37-0.37,0.58-0.88,0.58-1.41L18,4 c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v3.16C6,7.69,6.21,8.2,6.58,8.58L10,12l-3.41,3.4C6.21,15.78,6,16.29,6,16.82V20 c0,1.1,0.9,2,2,2H16z M8,7.09V5c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v2.09c0,0.27-0.11,0.52-0.29,0.71L12,11.5L8.29,7.79 C8.11,7.61,8,7.35,8,7.09z" />
    </g>
  </svg>
)

export { IconHourglassBottomRounded as default }