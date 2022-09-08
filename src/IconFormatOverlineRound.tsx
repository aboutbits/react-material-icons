import React from 'react'
import { IconProps } from './types'

const IconFormatOverlineRound: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M5,4c0-0.55,0.45-1,1-1h12c0.55,0,1,0.45,1,1s-0.45,1-1,1H6C5.45,5,5,4.55,5,4z M12,7c-3.87,0-7,3.13-7,7 c0,3.87,3.13,7,7,7s7-3.13,7-7C19,10.13,15.87,7,12,7z M12,18.5c-2.49,0-4.5-2.01-4.5-4.5S9.51,9.5,12,9.5s4.5,2.01,4.5,4.5 S14.49,18.5,12,18.5z" />
    </g>
  </svg>
)

export { IconFormatOverlineRound as default }
