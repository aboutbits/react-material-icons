import React from 'react'
import { IconProps } from './types'

const IconOutletRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M9,12c-0.55,0-1-0.45-1-1V8 c0-0.55,0.45-1,1-1s1,0.45,1,1v3C10,11.55,9.55,12,9,12z M13,18h-2c-0.55,0-1-0.45-1-1v-0.89c0-1,0.68-1.92,1.66-2.08 C12.92,13.82,14,14.79,14,16v1C14,17.55,13.55,18,13,18z M16,11c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1V8c0-0.55,0.45-1,1-1 c0.55,0,1,0.45,1,1V11z" />
  </svg>
)

export { IconOutletRounded as default }
