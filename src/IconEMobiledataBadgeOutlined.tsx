import React from 'react'
import { IconProps } from './types'

const IconEMobiledataBadgeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm120 480h320v-80H400v-80h200v-80H400v-80h240v-80H320v400Z" />
  </svg>
)

export { IconEMobiledataBadgeOutlined as default }