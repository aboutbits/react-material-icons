import React from 'react'
import { IconProps } from './types'

const IconSouthSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
  </svg>
)

export { IconSouthSharpFilled as default }
