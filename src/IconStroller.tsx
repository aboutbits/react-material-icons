import React from 'react'
import { IconProps } from './types'

const IconStroller: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{props.title === undefined ? 'IconStroller' : props.title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
      <g>
        <circle cx="16" cy="20" r="2" />
        <circle cx="6" cy="20" r="2" />
      </g>
      <path d="M22,7V6.48C22,4.56,20.52,3,18.65,3c-1.66,0-2.54,1.27-3.18,2.03l-8.8,10.32C6.12,16,6.58,17,7.43,17L15,17 c1.1,0,2-0.9,2-2V6.27C17.58,5.59,17.97,5,18.65,5C19.42,5,20,5.66,20,6.48V7H22z" />
      <path d="M14.3,4.1C13.03,3.4,11.56,3,10,3C8.03,3,6.21,3.64,4.72,4.72l4.89,4.89L14.3,4.1z" />
    </g>
  </svg>
)

export { IconStroller as default }
