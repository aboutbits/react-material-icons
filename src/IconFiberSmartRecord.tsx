import React from 'react'
import { IconProps } from './types'

const IconFiberSmartRecord: React.FC<IconProps> = ({
  title = 'IconFiberSmartRecord',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M24 24H0V0h24v24z" fill="none" />
    <g>
      <circle cx="9" cy="12" r="8" />
      <path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" />
    </g>
  </svg>
)

export { IconFiberSmartRecord as default }
