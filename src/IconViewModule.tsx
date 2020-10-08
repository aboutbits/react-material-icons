import React from 'react'
import { IconProps } from './types'

const IconViewModule: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconViewModule' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
  </svg>
)

export { IconViewModule as default }
