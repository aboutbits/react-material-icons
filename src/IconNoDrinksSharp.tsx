import React from 'react'
import { IconProps } from './types'

const IconNoDrinksSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M21.19,21.19L2.81,2.81L1.39,4.22l8.23,8.23L11,14v5H6v2h12v-0.17l1.78,1.78L21.19,21.19z M13,19v-3.17L16.17,19H13z M7.83,5l-2-2H21v2l-6.2,6.97L9.83,7h6.74l1.78-2H7.83z" />
    </g>
  </svg>
)

export { IconNoDrinksSharp as default }
