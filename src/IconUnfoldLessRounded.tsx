import React from 'react'
import { IconProps } from './types.js'

export const IconUnfoldLessRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-284-96 96q-11 11-28 11t-28-11q-11-11-11-28t11-28l124-124q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l124 124q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96Zm0-392 96-96q11-11 28-11t28 11q11 11 11 28t-11 28L508-592q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L328-716q-11-11-11-28t11-28q11-11 28-11t28 11l96 96Z" />
  </svg>
)
