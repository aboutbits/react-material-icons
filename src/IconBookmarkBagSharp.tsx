import React from 'react'
import { IconProps } from './types'

export const IconBookmarkBagSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400h40v40h60v-40h40v40h60v-40h40v-240h-60v-80H420v80h-60v240Zm100-240v-40h40v40h-40ZM200-120v-720h560v720L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
  </svg>
)
