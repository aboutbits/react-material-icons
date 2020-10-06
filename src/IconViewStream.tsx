import React from 'react'
import { IconProps } from './types'

const IconViewStream: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
  </svg>
)

export { IconViewStream as default }
