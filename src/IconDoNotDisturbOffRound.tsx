import React from 'react'
import { IconProps } from './types'

const IconDoNotDisturbOffRound: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M17,11v2h-1.17l4.51,4.51C21.39,15.93,22,14.04,22,12c0-5.52-4.48-10-10-10C9.96,2,8.07,2.61,6.49,3.66L13.83,11H17z M2.1,4.93l1.56,1.56c-1.37,2.07-2,4.68-1.48,7.45c0.75,3.95,3.92,7.13,7.88,7.88c2.77,0.52,5.38-0.1,7.45-1.48l1.56,1.56 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0l0,0 C1.71,3.91,1.71,4.54,2.1,4.93z M7,11h1.17l2,2H7V11z" />
    </g>
  </svg>
)

export { IconDoNotDisturbOffRound as default }
