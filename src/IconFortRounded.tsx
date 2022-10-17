import React from 'react'
import { IconProps } from './types'

const IconFortRounded: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M21,4v1h-2V4c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1h-2V4c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2.17 c0,0.53,0.21,1.04,0.59,1.41L15,9v1H9V9l1.41-1.41C10.79,7.21,11,6.7,11,6.17V4c0-0.55-0.45-1-1-1h0C9.45,3,9,3.45,9,4v1H7V4 c0-0.55-0.45-1-1-1h0C5.45,3,5,3.45,5,4v1H3V4c0-0.55-0.45-1-1-1h0C1.45,3,1,3.45,1,4v2.17C1,6.7,1.21,7.21,1.59,7.59L3,9v6 l-1.41,1.41C1.21,16.79,1,17.3,1,17.83V19c0,1.1,0.9,2,2,2h7l0-2.89c0-1,0.68-1.92,1.66-2.08C12.92,15.82,14,16.79,14,18v3h7 c1.1,0,2-0.9,2-2v-1.17c0-0.53-0.21-1.04-0.59-1.41L21,15V9l1.41-1.41C22.79,7.21,23,6.7,23,6.17V4c0-0.55-0.45-1-1-1h0 C21.45,3,21,3.45,21,4z" />
      </g>
    </g>
  </svg>
)

export { IconFortRounded as default }
