import React from 'react'
import { IconProps } from './types'

const IconOfflineShareOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M6,5H4v16c0,1.1,0.9,2,2,2h10v-2H6V5z" />
        <path d="M18,1h-8C8.9,1,8,1.9,8,3v14c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V3C20,1.9,19.1,1,18,1z M18,17h-8v-1h8V17z M18,14h-8V6h8 V14z M18,4h-8V3h8V4z" />
        <path d="M12.5,10.25h1.63l-0.69,0.69L14.5,12L17,9.5L14.5,7l-1.06,1.06l0.69,0.69H12c-0.55,0-1,0.45-1,1V12h1.5V10.25z" />
      </g>
    </g>
  </svg>
)

export { IconOfflineShareOutlined as default }
