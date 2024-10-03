import React from 'react'
import { IconProps } from './types.js'

export const IconSimCardDownloadSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-280 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM160-80v-560l240-240h400v800H160Z" />
  </svg>
)
