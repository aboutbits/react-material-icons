import React from 'react'
import { IconProps } from './types'

const IconVerticalAlignBottom: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>
      {props.title === undefined ? 'IconVerticalAlignBottom' : props.title}
    </title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
  </svg>
)

export { IconVerticalAlignBottom as default }
