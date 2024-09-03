import React from 'react'
import { IconProps } from './types'

const IconPalletOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-160h800v160H760v-80H540v80H420v-80H200v80H80Zm160-240q-17 0-28.5-11.5T200-360v-480q0-17 11.5-28.5T240-880h480q17 0 28.5 11.5T760-840v480q0 17-11.5 28.5T720-320H240Zm40-80h400v-400H280v400Zm80-240h240v-80H360v80Zm-80 240v-400 400Z" />
  </svg>
)

export { IconPalletOutlined as default }