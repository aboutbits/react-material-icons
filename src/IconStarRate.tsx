import React from 'react'
import { IconProps } from './types'

const IconStarRate: React.FC<IconProps> = ({
  title = 'IconStarRate',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" x="0" />
      <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
    </g>
  </svg>
)

export { IconStarRate as default }
