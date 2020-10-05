import React from 'react'
import { IconProps } from './types'
const IconAmpStories: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <g>
        <rect height="15" width="10" x="7" y="4" />
        <rect height="11" width="2" x="3" y="6" />
        <rect height="11" width="2" x="19" y="6" />
      </g>
    </g>
  </svg>
)

export { IconAmpStories }
