import React from 'react'
import { IconProps } from './types'

export const IconCloseSmallRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-424 364-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l116-116-116-115q-11-11-11-28t11-28q11-11 28-11t28 11l116 116 115-116q11-11 28-11t28 11q12 12 12 28.5T651-595L535-480l116 116q11 11 11 28t-11 28q-12 12-28.5 12T595-308L480-424Z" />
  </svg>
)
