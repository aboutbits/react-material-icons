import React from 'react'
import { IconProps } from './types'

const IconAppShortcutSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M686-440H480v120h-80v-200h286l-62-64 56-56 160 160-160 160-56-56 62-64ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
  </svg>
)

export { IconAppShortcutSharp as default }
