import React from 'react'
import { IconProps } from './types'

const IconBookmarkCheckSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m438-400 198-198-57-56-141 141-57-57-57 57 114 113ZM200-120v-720h560v720L480-240 200-120Z" />
  </svg>
)

export { IconBookmarkCheckSharpFilled as default }
