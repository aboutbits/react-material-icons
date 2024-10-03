import React from 'react'
import { IconProps } from './types.js'

export const IconHighlightTextCursorRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-80 200h160q17 0 28.5-11.5T600-320q0-17-11.5-28.5T560-360h-40v-240h40q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H400q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600h40v240h-40q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Z" />
  </svg>
)
