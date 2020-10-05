import React from 'react'
import { IconProps } from './types'
const IconHorizontalDistribute: React.FC<IconProps> = (
  props: IconProps
): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z" />
  </svg>
)

export { IconHorizontalDistribute }
