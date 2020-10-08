import React from 'react'
import { IconProps } from './types'

const IconRemove: React.FC<IconProps> = ({
  title = 'IconRemove',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13H5v-2h14v2z" />
  </svg>
)

export { IconRemove as default }
