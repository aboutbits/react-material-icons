import React from 'react'
import { IconProps } from './types'

const IconForward: React.FC<IconProps> = ({
  title = 'IconForward',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8V4l8 8-8 8v-4H4V8z" />
  </svg>
)

export { IconForward as default }
