import React from 'react'
import { IconProps } from './types'

const IconTrendingUp: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconTrendingUp' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
)

export { IconTrendingUp as default }
