import React from 'react'
import { IconProps } from './types'

const IconPlumbingSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M16.16,5.64l3.54,3.54c1.17-1.17,1.17-3.07,0-4.24l-3.54-3.54l-4.24,4.24l2.12,2.12L16.16,5.64z" />
        <rect
          height="3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.2383 8.9393)"
          width="5"
          x="5.17"
          y="10.5"
        />
        <path d="M15.45,7.76l-1.41,1.41L9.79,4.93L7.67,7.05l4.24,4.24l-8.49,8.49l2.83,2.83L16.86,12l0.71,0.71l1.41-1.41L15.45,7.76z" />
      </g>
    </g>
  </svg>
)

export { IconPlumbingSharp as default }
