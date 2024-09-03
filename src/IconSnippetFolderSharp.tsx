import React from 'react'
import { IconProps } from './types'

const IconSnippetFolderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm420-100v-200h55l65 65v135H580Zm-60 60h240v-220L660-600H520v320Z" />
  </svg>
)

export { IconSnippetFolderSharp as default }
