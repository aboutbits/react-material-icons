import React from 'react'
import { IconProps } from './types.js'

export const IconUnsubscribeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-440 160-640v400h320q0 21 3 40.5t9 39.5H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v228q-18-9-38.5-15t-41.5-9v-124L480-440Zm0-80 320-200H160l320 200ZM760-40q-83 0-141.5-58.5T560-240q0-83 58.5-141.5T760-440q83 0 141.5 58.5T960-240q0 83-58.5 141.5T760-40ZM640-220h240v-40H640v40Zm-480-20v-480 480Z" />
  </svg>
)
