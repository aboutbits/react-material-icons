import React from 'react'
import { IconProps } from './types'

const IconFolderCopySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Zm80-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z" />
  </svg>
)

export { IconFolderCopySharp as default }
