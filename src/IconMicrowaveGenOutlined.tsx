import React from 'react'
import { IconProps } from './types.js'

export const IconMicrowaveGenOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm40-40h400v-400H200v400Zm520 0q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Zm-440-80v-240h240v240H280Zm440-80q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520q-17 0-28.5 11.5T680-480q0 17 11.5 28.5T720-440Zm0-160q17 0 28.5-11.5T760-640q0-17-11.5-28.5T720-680q-17 0-28.5 11.5T680-640q0 17 11.5 28.5T720-600ZM160-240v-480 480Z" />
  </svg>
)
