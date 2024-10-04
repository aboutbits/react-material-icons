import React from 'react'
import { IconProps } from './types'

const IconApprovalOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-240q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v240H160Zm80-160h480v-80H240v80Zm240-160L280-680q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680L480-400Zm0-112 120-168q0-50-35-85t-85-35q-50 0-85 35t-35 85l120 168Zm0-144Z" />
  </svg>
)

export { IconApprovalOutlined as default }
