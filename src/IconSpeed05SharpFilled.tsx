import React from 'react'
import { IconProps } from './types'

export const IconSpeed05SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-80h80v80h-80Zm120 0v-80h160v-80H400v-240h240v80H480v80h160v240H400Z" />
  </svg>
)
