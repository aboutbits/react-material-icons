import React from 'react'
import { IconProps } from './types'

const IconViewQuilt: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconViewQuilt' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" />
  </svg>
)

export { IconViewQuilt as default }
