import React from 'react'
import { IconProps } from './types'

const IconTableBarSharp: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M22,7.5C22,5.57,17.52,4,12,4S2,5.57,2,7.5c0,1.81,3.95,3.31,9,3.48V15H8l-2,5h2l1.2-3h5.6l1.2,3h2l-2-5h-3v-4.02 C18.05,10.81,22,9.31,22,7.5z" />
      </g>
    </g>
  </svg>
)

export { IconTableBarSharp as default }