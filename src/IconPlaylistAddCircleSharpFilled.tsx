import React from 'react'
import { IconProps } from './types.js'

export const IconPlaylistAddCircleSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-280h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-320-80h120v-80H280v80Zm0-120h280v-80H280v80Zm0-120h280v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
