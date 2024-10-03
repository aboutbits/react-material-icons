import React from 'react'
import { IconProps } from './types.js'

export const IconSplitscreenAddOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-160 4-4 160Zm0 80q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360H200v160h400v80H200Zm0-400q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 0v-160 160ZM760-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
