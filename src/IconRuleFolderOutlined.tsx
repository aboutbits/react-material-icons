import React from 'react'
import { IconProps } from './types'

export const IconRuleFolderOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m313-305 198-198-57-57-141 142-57-57-56 57 113 113Zm263 0 64-64 64 64 56-56-64-64 64-64-56-56-64 64-64-64-56 56 64 64-64 64 56 56ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
  </svg>
)
