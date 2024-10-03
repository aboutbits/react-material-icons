import React from 'react'
import { IconProps } from './types.js'

export const IconHowToVoteSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-262l110-125 57 57-80 90h546l-78-88 57-57 108 123v262H120Zm361-247L228-582l310-310 255 253-312 312Zm1-115 198-198-142-140-198 198 142 140Z" />
  </svg>
)
