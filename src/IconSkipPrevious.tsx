import React from 'react'
import { IconProps } from './types'

const IconSkipPrevious: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
)

export { IconSkipPrevious as default }
