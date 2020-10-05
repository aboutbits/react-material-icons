import React from 'react'
import { IconProps } from './types'
const IconMaximize: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 3h18v2H3z" />
  </svg>
)

export { IconMaximize }
