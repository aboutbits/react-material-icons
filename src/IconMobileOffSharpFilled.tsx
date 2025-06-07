import React from 'react'
import { IconProps } from './types.js'

export const IconMobileOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 28-820l56-56L876-84l-56 56ZM200-703l80 80v383h384l96 96v104H200v-663Zm153-17L206-868v-52h554v606l-80-80v-326H353Z" />
  </svg>
)
