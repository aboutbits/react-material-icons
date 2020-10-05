import React from 'react'
import { IconProps } from './types'
const IconSwitchRight: React.FC<IconProps> = (props: IconProps): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      fill="none"
      height="24"
      transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)"
      width="24"
    />
    <path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z" />
  </svg>
)

export { IconSwitchRight }
