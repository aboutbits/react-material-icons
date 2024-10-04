import React from 'react'
import { IconProps } from './types.js'

export const IconFlagSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z" />
  </svg>
)
