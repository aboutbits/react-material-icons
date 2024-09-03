import React from 'react'
import { IconProps } from './types'

const Icon24fpsSelectOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Zm80-320v-120H520v-280h80v200h80v-200h80v200h80v80h-80v120h-80Zm-480 0v-160q0-33 23.5-56.5T280-640h80v-80H200v-80h160q33 0 56.5 23.5T440-720v80q0 33-23.5 56.5T360-560h-80v80h160v80H200Z" />
  </svg>
)

export { Icon24fpsSelectOutlined as default }