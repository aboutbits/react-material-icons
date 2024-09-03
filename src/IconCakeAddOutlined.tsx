import React from 'react'
import { IconProps } from './types'

const IconCakeAddOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-640v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM120-80q-17 0-28.5-11.5T80-120v-200q0-33 23.5-56.5T160-400v-160q0-33 23.5-56.5T240-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T720-560v160q33 0 56.5 23.5T800-320v200q0 17-11.5 28.5T760-80H120Zm120-320h400v-160H240v160Zm-80 240h560v-160H160v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H160h560Z" />
  </svg>
)

export { IconCakeAddOutlined as default }