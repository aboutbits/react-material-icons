import React from 'react'
import { IconProps } from './types'

const IconHorizontalSplit: React.FC<IconProps> = ({
  title = 'IconHorizontalSplit',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
  </svg>
)

export { IconHorizontalSplit as default }
