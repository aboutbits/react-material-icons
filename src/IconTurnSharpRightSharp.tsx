import React from 'react'
import { IconProps } from './types'

export const IconTurnSharpRightSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-320h400v-248l-64 64-56-56 160-160 160 160-56 56-64-64v328H320v240h-80Z" />
  </svg>
)
