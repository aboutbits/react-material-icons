import React from 'react'
import { IconProps } from './types'

export const IconHowToVoteSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-262l110-125 57 57-80 90h546l-78-88 57-57 108 123v262H120Zm80-80h560v-80H200v80Zm282-168L228-582l311-311 254 254-311 311Zm0-113 198-198-141-141-198 198 141 141ZM200-160v-80 80Z" />
  </svg>
)
