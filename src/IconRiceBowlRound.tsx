import React from 'react'
import { IconProps } from './types'

const IconRiceBowlRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M22,12L22,12c0-5.48-4.4-9.93-9.86-10C8.52,1.95,5.29,4.03,3.43,7.14C0.1,12.69,2.98,18.27,8,20.25v0.25 C8,21.33,8.67,22,9.5,22h5c0.83,0,1.5-0.67,1.5-1.5v-0.25C19.53,18.86,22,15.69,22,12z M20,12h-4V5.08C18.39,6.47,20,9.05,20,12z M14,4.26V12h-4V4.26C10.64,4.1,11.31,4,12,4S13.36,4.1,14,4.26z M4,12c0-2.95,1.61-5.53,4-6.92V12H4z" />
  </svg>
)

export { IconRiceBowlRound as default }
