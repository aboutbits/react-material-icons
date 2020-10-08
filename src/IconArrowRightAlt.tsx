import React from 'react'
import { IconProps } from './types'

const IconArrowRightAlt: React.FC<IconProps> = ({
  title = 'IconArrowRightAlt',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
  </svg>
)

export { IconArrowRightAlt as default }
