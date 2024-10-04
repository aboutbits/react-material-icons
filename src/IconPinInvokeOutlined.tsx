import React from 'react'
import { IconProps } from './types.js'

export const IconPinInvokeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h400v80H160v480h640v-240h80v240q0 33-23.5 56.5T800-160H160Zm242-145-56-57 118-118h-90v-80h226v226h-80v-89L402-305Zm358-255q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)
