import React from 'react'
import { IconProps } from './types'

const IconPause: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconPause' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)

export { IconPause as default }
