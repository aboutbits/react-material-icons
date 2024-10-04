import React from 'react'
import { IconProps } from './types'

const IconDevicesWearablesOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-760h320v-40H160v40Zm0 680q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h320q33 0 56.5 23.5T560-800v154q-23 12-43 27.5T480-584v-96H160v400h257q8 22 18.5 42t24.5 38H160v40h320v-16q15 17 32 31t37 25q-11 18-28.5 29T480-80H160Zm540-160q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM600-80v-104q-54-27-87-79t-33-117q0-65 33-117t87-79v-104h200v104q54 27 87 79t33 117q0 65-33 117t-87 79v104H600ZM160-200v40-40Zm0-560v-40 40Z" />
  </svg>
)

export { IconDevicesWearablesOutlined as default }
