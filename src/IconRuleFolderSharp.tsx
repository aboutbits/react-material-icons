import React from 'react'
import { IconProps } from './types'

const IconRuleFolderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm153-65 198-198-57-57-141 142-57-57-56 57 113 113Zm263 0 64-64 64 64 56-56-64-64 64-64-56-56-64 64-64-64-56 56 64 64-64 64 56 56Z" />
  </svg>
)

export { IconRuleFolderSharp as default }
