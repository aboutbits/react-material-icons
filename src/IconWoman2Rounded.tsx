import React from 'react'
import { IconProps } from './types'

const IconWoman2Rounded: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <path d="M13.94,8.31c-0.38-0.96-1.42-1.52-2.48-1.24c-0.66,0.17-1.18,0.7-1.43,1.34l-2.48,6.22C7.28,15.29,7.77,16,8.47,16h2.03 v5c0,0.55,0.45,1,1,1h1c0.55,0,1-0.45,1-1v-5h2.03c0.71,0,1.19-0.71,0.93-1.37L13.94,8.31z" />
          <circle cx="12" cy="4" r="2" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconWoman2Rounded as default }
