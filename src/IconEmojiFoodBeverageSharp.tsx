import React from 'react'
import { IconProps } from './types'

const IconEmojiFoodBeverageSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g />
      <g>
        <rect height="2" width="18" x="2" y="19" />
        <path d="M20,3H9v2.4L11,7v5H6V7l2-1.6V3H4v14h14v-7h2c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,8h-2V5h2V8z" />
      </g>
    </g>
  </svg>
)

export { IconEmojiFoodBeverageSharp as default }
