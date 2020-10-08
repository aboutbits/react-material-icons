import React from 'react'
import { IconProps } from './types'

const IconPlusOne: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconPlusOne' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z" />
  </svg>
)

export { IconPlusOne as default }
