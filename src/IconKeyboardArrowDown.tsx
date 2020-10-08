import React from 'react'
import { IconProps } from './types'

const IconKeyboardArrowDown: React.FC<IconProps> = ({
  title = 'IconKeyboardArrowDown',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
)

export { IconKeyboardArrowDown as default }
