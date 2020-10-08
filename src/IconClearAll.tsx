import React from 'react'
import { IconProps } from './types'

const IconClearAll: React.FC<IconProps> = ({
  title = 'IconClearAll',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
  </svg>
)

export { IconClearAll as default }
