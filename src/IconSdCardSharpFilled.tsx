import React from 'react'
import { IconProps } from './types'

const IconSdCardSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-560l240-240h400v800H160Zm200-440h80v-160h-80v160Zm120 0h80v-160h-80v160Zm120 0h80v-160h-80v160Z" />
  </svg>
)

export { IconSdCardSharpFilled as default }
