import React from 'react'
import { IconProps } from './types'

const Icon18UpRatingSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <rect height="1.5" width="1.5" x="13" y="12.5" />
        <rect height="1.5" width="1.5" x="13" y="10" />
        <path d="M21,3H3v18h18V3z M10,15H8.5v-4.5H7V9h3V15z M16,14c0,0.55-0.45,1-1,1h-2.5c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1H15 c0.55,0,1,0.45,1,1V14z" />
      </g>
    </g>
  </svg>
)

export { Icon18UpRatingSharp as default }
