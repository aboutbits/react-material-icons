import React from 'react'
import { IconProps } from './types'

const IconStopCircleRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M15,16H9c-0.55,0-1-0.45-1-1V9 c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v6C16,15.55,15.55,16,15,16z" />
  </svg>
)

export { IconStopCircleRounded as default }
