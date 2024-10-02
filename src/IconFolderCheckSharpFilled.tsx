import React from 'react'
import { IconProps } from './types'

export const IconFolderCheckSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m434-297 226-227-56-56-170 170-85-85-57 57 142 141ZM80-160v-640h320l80 80h400v560H80Z" />
  </svg>
)
