import React from 'react'
import { IconProps } from './types'

const IconTransgenderTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M12,8c1.93,0,3.5,1.57,3.5,3.5S13.93,15,12,15s-3.5-1.57-3.5-3.5S10.07,8,12,8z M16.53,8.38l3.97-3.96V7h2V1h-6v2h2.58 l-3.97,3.97C14.23,6.36,13.16,6,12,6c-1.16,0-2.23,0.36-3.11,0.97L8.24,6.32l1.41-1.41L8.24,3.49L6.82,4.9L4.92,3H7.5V1h-6v6h2V4.42 l1.91,1.9L3.99,7.74l1.41,1.41l1.41-1.41l0.65,0.65C6.86,9.27,6.5,10.34,6.5,11.5c0,2.7,1.94,4.94,4.5,5.41L11,19H9v2h2v2h2v-2h2v-2 h-2l0-2.09c2.56-0.47,4.5-2.71,4.5-5.41C17.5,10.34,17.14,9.27,16.53,8.38z" />
  </svg>
)

export { IconTransgenderTwoTone as default }
