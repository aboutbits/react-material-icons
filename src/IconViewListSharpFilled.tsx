import React from 'react'
import { IconProps } from './types.js'

export const IconViewListSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160h520v-160H360v160ZM80-640h200v-160H80v160Zm0 240h200v-160H80v160Zm0 240h200v-160H80v160Zm280-240h520v-160H360v160Zm0-240h520v-160H360v160Z" />
  </svg>
)
