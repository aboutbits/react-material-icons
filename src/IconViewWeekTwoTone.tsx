import React from 'react'
import { IconProps } from './types'

const IconViewWeekTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path
      d="M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z"
      opacity=".3"
    />
    <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z" />
  </svg>
)

export { IconViewWeekTwoTone as default }
