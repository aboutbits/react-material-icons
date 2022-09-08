import React from 'react'
import { IconProps } from './types'

const IconStrollerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M18,20c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S18,18.9,18,20z M6,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S7.1,18,6,18z M22,7V6.48C22,4.56,20.52,3,18.65,3c-1.66,0-2.54,1.27-3.18,2.03L5.27,17H17V6.27C17.58,5.59,17.97,5,18.65,5 C19.42,5,20,5.66,20,6.48V7H22z M14.3,4.1C13.03,3.4,11.56,3,10,3C8.03,3,6.21,3.64,4.72,4.72l4.89,4.89L14.3,4.1z" />
    </g>
  </svg>
)

export { IconStrollerSharp as default }
