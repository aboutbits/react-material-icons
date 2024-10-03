import React from 'react'
import { IconProps } from './types.js'

export const IconBrokenImageSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-344l120 120 160-160 160 160 160-160 120 120v264H120Zm0-720h720v343L720-617 560-457 400-617 240-457 120-577v-263Z" />
  </svg>
)
