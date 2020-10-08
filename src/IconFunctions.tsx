import React from 'react'
import { IconProps } from './types'

const IconFunctions: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconFunctions' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
  </svg>
)

export { IconFunctions as default }
