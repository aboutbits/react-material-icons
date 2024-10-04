import React from 'react'
import { IconProps } from './types'

const IconSimCardDownloadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-280 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM160-80v-560l240-240h400v800H160Zm80-80h480v-640H434L240-606v446Zm0 0h480-480Z" />
  </svg>
)

export { IconSimCardDownloadSharp as default }
