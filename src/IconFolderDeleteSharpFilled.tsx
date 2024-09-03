import React from 'react'
import { IconProps } from './types'

const IconFolderDeleteSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm440-120h200v-220h40v-60H660v-40h-80v40H480v60h40v220Zm60-60v-160h80v160h-80Z" />
  </svg>
)

export { IconFolderDeleteSharpFilled as default }
