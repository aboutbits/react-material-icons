import React from 'react'
import { IconProps } from './types'

export const IconDeveloperModeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v240H200v-240Zm80-400h-80v-240h560v240h-80v-40H280v40Zm336 384-56-58 126-126-126-126 56-58 184 184-184 184Z" />
  </svg>
)
