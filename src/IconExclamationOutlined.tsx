import React from 'react'
import { IconProps } from './types'

export const IconExclamationOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z" />
  </svg>
)
