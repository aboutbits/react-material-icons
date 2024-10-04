import React from 'react'
import { IconProps } from './types.js'

export const IconTimer5ShutterOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-120h240v-100H320v-340h360v120H440v100h160q33 0 56.5 23.5T680-460v140q0 50-35 85t-85 35H320Z" />
  </svg>
)