import React from 'react'
import { IconProps } from './types'

const IconPlayDisabledTwoTone: React.FC<IconProps> = ({ ...props }) => (
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
        <polygon
          enableBackground="new"
          opacity=".3"
          points="10,12.83 10,15.36 11.55,14.37"
        />
      </g>
      <path d="M2.81,2.81L1.39,4.22L8,10.83V19l4.99-3.18l6.78,6.78l1.41-1.41L2.81,2.81z M10,15.36v-2.53l1.55,1.55L10,15.36z M19,12 L8,5v0.17l8.45,8.45L19,12z" />
    </g>
  </svg>
)

export { IconPlayDisabledTwoTone as default }
