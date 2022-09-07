import React from 'react'
import { IconProps } from './types'

const IconCleanHandsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M16.99,5l0.63,1.37L18.99,7l-1.37,0.63L16.99,9l-0.63-1.37L14.99,7l1.37-0.63L16.99,5 M20,14c1.1,0,2-0.9,2-2c0-1.1-2-4-2-4 s-2,2.9-2,4C18,13.1,18.9,14,20,14z M11,6.1V4h2c0.57,0,1.1,0.17,1.55,0.45l1.43-1.43C15.15,2.39,14.13,2,13,2c-1.47,0-5.44,0-5.5,0 v2H9v2.11C7.22,6.48,5.8,7.79,5.25,9.5h2.16C7.94,8.61,8.89,8,10,8c1.62,0,2.94,1.29,2.99,2.9L15,11.65V11 C15,8.58,13.28,6.56,11,6.1z M22,19v1l-8,2.5l-7-1.94V22H1V11h7.97l6.16,2.3C16.25,13.72,17,14.8,17,16h2C20.66,16,22,17.34,22,19z M5,20v-7H3v7H5z M19.9,18.57c-0.16-0.33-0.51-0.56-0.9-0.56h-5.35c-0.54,0-1.07-0.09-1.58-0.26l-2.38-0.79l0.63-1.9l2.38,0.79 C13.01,15.95,15,16,15,16c0-0.37-0.23-0.7-0.57-0.83L8.61,13H7v5.48l6.97,1.93L19.9,18.57z" />
  </svg>
)

export { IconCleanHandsOutlined as default }
