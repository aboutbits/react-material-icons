import React from 'react'
import { IconProps } from './types'

const IconCurrencyFrancRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M18,4c0-0.55-0.45-1-1-1H8C7.45,3,7,3.45,7,4v12H6c-0.55,0-1,0.45-1,1s0.45,1,1,1h1v2c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-2h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H9v-3h7c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H9V5h8C17.55,5,18,4.55,18,4z" />
    </g>
  </svg>
)

export { IconCurrencyFrancRounded as default }
