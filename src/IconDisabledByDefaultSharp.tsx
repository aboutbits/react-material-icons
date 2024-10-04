import React from 'react'
import { IconProps } from './types'

const IconDisabledByDefaultSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200h560v-560H200v560Zm-80 80v-720h720v720H120Zm216-160 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56Zm-136 80v-560 560Z" />
  </svg>
)

export { IconDisabledByDefaultSharp as default }
