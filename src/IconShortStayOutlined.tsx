import React from 'react'
import { IconProps } from './types'

const IconShortStayOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160h147-227 80Zm-80 80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h360q33 0 56.5 23.5T640-800v243q-20 3-40 9t-40 15v-267H200v261q18-11 38-16t42-5h280v27q-22 11-41 24t-35 29H280q-33 0-56.5 23.5T200-400v240h227q11 24 25.5 44T484-80H200Zm180-520q-33 0-56.5-23.5T300-680q0-33 23.5-56.5T380-760q33 0 56.5 23.5T460-680q0 33-23.5 56.5T380-600Zm-40 400h71q-5-20-8-40t-3-40q0-26 5-52t15-52v-56h-80v80h-80v80h80v80ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Z" />
  </svg>
)

export { IconShortStayOutlined as default }