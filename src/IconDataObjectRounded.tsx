import React from 'react'
import { IconProps } from './types'

const IconDataObjectRounded: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M4,7v2c0,0.55-0.45,1-1,1h0c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h0c0.55,0,1,0.45,1,1v2c0,1.66,1.34,3,3,3h2 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7c-0.55,0-1-0.45-1-1v-2c0-1.3-0.84-2.42-2-2.83v-0.34C5.16,11.42,6,10.3,6,9V7 c0-0.55,0.45-1,1-1h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C5.34,4,4,5.34,4,7z" />
        <path d="M21,10c-0.55,0-1-0.45-1-1V7c0-1.66-1.34-3-3-3h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2c0.55,0,1,0.45,1,1v2 c0,1.3,0.84,2.42,2,2.83v0.34c-1.16,0.41-2,1.52-2,2.83v2c0,0.55-0.45,1-1,1h-2c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h2 c1.66,0,3-1.34,3-3v-2c0-0.55,0.45-1,1-1h0c0.55,0,1-0.45,1-1v-2C22,10.45,21.55,10,21,10L21,10z" />
      </g>
    </g>
  </svg>
)

export { IconDataObjectRounded as default }