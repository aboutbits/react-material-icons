import React from 'react'
import { IconProps } from './types'

const IconOpenInPhoneOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-33 0-56.5-23.5T200-120v-240h80v120h400v-480H280v120h-80v-240q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm120-160-56-56 62-64H80v-80h326l-62-64 56-56 160 160-160 160ZM280-800h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
  </svg>
)

export { IconOpenInPhoneOutlined as default }
