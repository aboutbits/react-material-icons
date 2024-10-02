import React from 'react'
import { IconProps } from './types'

export const IconEMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280v-400h320v80H400v80h240v80H400v80h240v80H320Z" />
  </svg>
)
