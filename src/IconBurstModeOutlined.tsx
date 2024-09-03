import React from 'react'
import { IconProps } from './types'

const IconBurstModeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h80v560H40Zm160 0v-560h80v560h-80Zm240 0q-33 0-56.5-23.5T360-280v-400q0-33 23.5-56.5T440-760h400q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H440Zm0-80h400v-400H440v400Zm40-80h320L696-500l-76 100-56-74-84 114Zm-40 80v-400 400Z" />
  </svg>
)

export { IconBurstModeOutlined as default }
