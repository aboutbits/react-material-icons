import React from 'react'
import { IconProps } from './types'

const IconStop: React.FC<IconProps> = ({ title = 'IconStop', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6h12v12H6z" />
  </svg>
)

export { IconStop as default }