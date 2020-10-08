import React from 'react'
import { IconProps } from './types'

const IconViewCompact: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconViewCompact' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
  </svg>
)

export { IconViewCompact as default }
