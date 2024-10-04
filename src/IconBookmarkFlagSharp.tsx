import React from 'react'
import { IconProps } from './types.js'

export const IconBookmarkFlagSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-400h60v-120h180l-60-80 60-80H380v280ZM200-120v-720h560v720L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
  </svg>
)
