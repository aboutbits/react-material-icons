import React from 'react'
import { IconProps } from './types'

const IconPagelessOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80H120q-33 0-56.5-23.5T40-160v-240h80v240h280v80Zm160 0v-80h280v-240h80v240q0 33-23.5 56.5T840-80H560ZM40-560v-240q0-33 23.5-56.5T120-880h280v80H120v240H40Zm800 0v-240H560v-80h280q33 0 56.5 23.5T920-800v240h-80Z" />
  </svg>
)

export { IconPagelessOutlined as default }