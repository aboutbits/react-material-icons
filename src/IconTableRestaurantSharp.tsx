import React from 'react'
import { IconProps } from './types'

const IconTableRestaurantSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M22.33,11l-2-7H3.67l-2,7H5.2L4,20h2l0.67-5h10.67L18,20h2l-1.2-9H22.33z M6.93,13l0.27-2h9.6l0.27,2H6.93z" />
      </g>
    </g>
  </svg>
)

export { IconTableRestaurantSharp as default }
