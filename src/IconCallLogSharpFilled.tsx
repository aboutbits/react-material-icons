import React from 'react'
import { IconProps } from './types'

const IconCallLogSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M758-80q-125 0-247.5-54T288-288Q188-388 134-510T80-758v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T484-240l116-116 200 41v235h-42ZM480-800v-80h400v80H480Zm0 160v-80h400v80H480Zm0 160v-80h400v80H480Z" />
  </svg>
)

export { IconCallLogSharpFilled as default }
