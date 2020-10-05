import React from 'react'
import { IconProps } from './types'
const IconNorthWest: React.FC<IconProps> = (props: IconProps): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z" />
  </svg>
)

export { IconNorthWest }
