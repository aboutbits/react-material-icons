import React from 'react'
import { IconProps } from './types.js'

export const IconLocalActivitySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM80-160v-240q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-240h800v240q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v240H80Z" />
  </svg>
)
