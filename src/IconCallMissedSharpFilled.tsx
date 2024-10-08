import React from 'react'
import { IconProps } from './types'

const IconCallMissedSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-263 200-543v183h-80v-320h320v80H256l224 224 304-304 56 57-360 360Z" />
  </svg>
)

export { IconCallMissedSharpFilled as default }
