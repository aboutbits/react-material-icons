import React from 'react'
import { IconProps } from './types'

const IconNightlifeRounded: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <path d="M2.87,5h10.26c0.8,0,1.28,0.89,0.83,1.55L9,14v4h1c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1v0 c0-0.55,0.45-1,1-1h1v-4L2.04,6.55C1.59,5.89,2.07,5,2.87,5z M10.1,9l1.4-2H4.49l1.4,2H10.1z M19,5h1.5C21.33,5,22,5.67,22,6.5v0 C22,7.33,21.33,8,20.5,8H19v9l0,0c0,1.84-1.64,3.28-3.54,2.95c-1.21-0.21-2.2-1.2-2.41-2.41C12.72,15.64,14.16,14,16,14 c0.35,0,0.69,0.06,1,0.17V7C17,5.9,17.9,5,19,5z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconNightlifeRounded as default }
