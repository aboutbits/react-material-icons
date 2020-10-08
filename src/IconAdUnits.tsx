import React from 'react'
import { IconProps } from './types'

const IconAdUnits: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconAdUnits' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM8 6h8v2H8z" />
  </svg>
)

export { IconAdUnits as default }
