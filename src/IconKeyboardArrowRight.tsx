import React from 'react'
import { IconProps } from './types'

const IconKeyboardArrowRight: React.FC<IconProps> = ({
  title = 'IconKeyboardArrowRight',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
)

export { IconKeyboardArrowRight as default }
