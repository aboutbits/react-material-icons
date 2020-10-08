import React from 'react'
import { IconProps } from './types'

const IconChevronLeft: React.FC<IconProps> = ({
  title = 'IconChevronLeft',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
)

export { IconChevronLeft as default }