import React from 'react'
import { IconProps } from './types'

export const IconComicBubbleSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m440-916 116 116h164v164l116 116-116 116 115 226-53 53-226-115-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Z" />
  </svg>
)
