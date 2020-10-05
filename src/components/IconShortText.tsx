import React from 'react'
import { IconProps } from './types'
const IconShortText: React.FC<IconProps> = (props: IconProps): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <g>
          <path d="M4,9h16v2H4V9z M4,13h10v2H4V13z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconShortText }
