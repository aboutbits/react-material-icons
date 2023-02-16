import React from 'react'
import { IconProps } from './types'

const IconIronRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M8.27,10c0.34,0,0.68-0.16,0.84-0.47C9.28,9.22,9.62,9,10,9h4c0.55,0,1,0.45,1,1v1H6c-2.21,0-4,1.79-4,4v2 c0,0.55,0.45,1,1,1h13c0.55,0,1-0.45,1-1v-1c1.66,0,3-1.34,3-3V9c0-0.55,0.45-1,1-1h0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h0 c-1.66,0-3,1.34-3,3v4c0,0.55-0.45,1-1,1v-4c0-1.66-1.34-3-3-3h-4C8.87,7,7.89,7.62,7.37,8.55C7.01,9.2,7.53,10,8.27,10z" />
  </svg>
)

export { IconIronRounded as default }