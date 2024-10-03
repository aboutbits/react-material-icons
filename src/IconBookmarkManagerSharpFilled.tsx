import React from 'react'
import { IconProps } from './types.js'

export const IconBookmarkManagerSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-80v-123l263-262 123 122L683-80H560Zm263-224 37-39-37-37-38 38 38 38ZM80-160v-640h320l80 80h400v84L480-236v76H80Z" />
  </svg>
)
