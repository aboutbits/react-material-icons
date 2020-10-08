import React from 'react'
import { IconProps } from './types'

const IconEast: React.FC<IconProps> = ({ title = 'IconEast', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <rect fill="none" height="24" width="24" />
    <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
  </svg>
)

export { IconEast as default }
