import React from 'react'
import { IconProps } from './types'

export const IconBookmarkSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-720h560v720L480-240 200-120Z" />
  </svg>
)
