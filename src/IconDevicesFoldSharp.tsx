import React from 'react'
import { IconProps } from './types'

export const IconDevicesFoldSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-120v-721l280-122v123h200v720H400Zm80-121 120-52v-547l-120 52v547Zm107 41h213v-560H680v521l-93 39Zm-107-41v-547 547ZM80-760v-80h80v80H80Zm0 640v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm160-160v-80h80v80h-80Zm0 640v-80h80v80h-80Z" />
  </svg>
)
