import React from 'react'
import { IconProps } from './types'

const IconDirectionsBusFilledRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <path
        d="M12,2C8,2,4,2.5,4,6v9.5c0,0.95,0.38,1.81,1,2.44v1.56C5,20.33,5.67,21,6.5,21h0 C7.33,21,8,20.33,8,19.5V19h8v0.5c0,0.82,0.67,1.5,1.5,1.5h0c0.82,0,1.5-0.67,1.5-1.5v-1.56c0.62-0.63,1-1.49,1-2.44V6 C20,2.5,16.42,2,12,2z M8.5,16C7.67,16,7,15.33,7,14.5S7.67,13,8.5,13s1.5,0.67,1.5,1.5S9.33,16,8.5,16z M15.5,16 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S16.33,16,15.5,16z M18,10H6V7h12V10z"
        enableBackground="new"
      />
    </g>
  </svg>
)

export { IconDirectionsBusFilledRounded as default }
