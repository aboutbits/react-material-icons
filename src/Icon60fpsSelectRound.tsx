import React from 'react'
import { IconProps } from './types'

const Icon60fpsSelectRound: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <path d="M18,6v6h-3V6H18z M18,4h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V6C20,4.9,19.1,4,18,4z M11,5L11,5 c0-0.55-0.45-1-1-1H6C4.9,4,4,4.9,4,6v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H6V6h4C10.55,6,11,5.55,11,5z M9,10 v2H6v-2H9z M4,22L4,22c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3C5,21.55,4.55,22,4,22z M8,22L8,22 c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3C9,21.55,8.55,22,8,22z M12,22L12,22c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3C13,21.55,12.55,22,12,22z M20,22h-4c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v3C21,21.55,20.55,22,20,22z" />
      </g>
    </g>
  </svg>
)

export { Icon60fpsSelectRound as default }
