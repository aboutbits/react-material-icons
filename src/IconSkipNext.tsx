import React from 'react'
import { IconProps } from './types'

const IconSkipNext: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconSkipNext' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
)

export { IconSkipNext as default }
