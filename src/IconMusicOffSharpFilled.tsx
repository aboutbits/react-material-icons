import React from 'react'
import { IconProps } from './types.js'

export const IconMusicOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z" />
  </svg>
)