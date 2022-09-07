import React from 'react'
import { IconProps } from './types'

const IconAutoFixNormalTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <rect
          height="2"
          opacity=".3"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.2634 10.636)"
          width="10.14"
          x="3.64"
          y="14.29"
        />
        <polygon points="20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" />
        <path d="M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M5.83,19.59l-1.41-1.41 L11.59,11L13,12.41L5.83,19.59z M14.41,11L13,9.59l1.17-1.17l1.41,1.41L14.41,11z" />
      </g>
    </g>
  </svg>
)

export { IconAutoFixNormalTwoTone as default }
