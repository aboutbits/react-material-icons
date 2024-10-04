import React from 'react'
import { IconProps } from './types'

const IconFluorescentOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-358v-240h560v240H200Zm240-402v-120h80v120h-80Zm308 112-56-56 72-72 56 56-72 72ZM440-80v-120h80v120h-80Zm324-100-72-72 56-56 72 72-56 56ZM212-648l-72-72 56-56 72 72-56 56Zm-16 468-56-56 72-72 56 56-72 72Zm84-258h400v-80H280v80Zm0 0v-80 80Z" />
  </svg>
)

export { IconFluorescentOutlined as default }
