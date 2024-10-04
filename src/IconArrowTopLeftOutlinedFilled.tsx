import React from 'react'
import { IconProps } from './types.js'

export const IconArrowTopLeftOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-160v-400H313l144 144-56 57-241-241 240-240 57 57-144 143h447v480h-80Z" />
  </svg>
)