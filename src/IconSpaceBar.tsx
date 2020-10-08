import React from 'react'
import { IconProps } from './types'

const IconSpaceBar: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconSpaceBar' : props.title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 9v4H6V9H4v6h16V9z" />
  </svg>
)

export { IconSpaceBar as default }
