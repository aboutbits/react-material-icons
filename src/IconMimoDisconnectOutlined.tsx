import React from 'react'
import { IconProps } from './types.js'

export const IconMimoDisconnectOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m127-833 73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h72l40 40v80H240v-80l40-40H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm673-7q33 0 56.5 23.5T880-760v440q0 26-14.5 46T828-246l-28-28v-486H314l-80-80h566ZM557-517Zm-213 13Z" />
  </svg>
)
