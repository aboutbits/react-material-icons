import React from 'react'
import { IconProps } from './types'

const IconCalendarViewDay: React.FC<IconProps> = ({
  title = 'IconCalendarViewDay',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
  </svg>
)

export { IconCalendarViewDay as default }
