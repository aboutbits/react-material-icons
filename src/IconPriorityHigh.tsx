import React from 'react'
import { IconProps } from './types'

const IconPriorityHigh: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>
      {props.title === undefined ? 'IconPriorityHigh' : props.title}
    </title>
    <path d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="19" r="2" />
    <path d="M10 3h4v12h-4z" />
  </svg>
)

export { IconPriorityHigh as default }
