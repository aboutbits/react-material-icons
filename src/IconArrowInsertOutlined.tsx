import React from 'react'
import { IconProps } from './types'

export const IconArrowInsertOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z" />
  </svg>
)
