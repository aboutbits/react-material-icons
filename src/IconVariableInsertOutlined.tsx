import React from 'react'
import { IconProps } from './types'

const IconVariableInsertOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-400h720v160h-80v-80H200v240h360v80H120Zm80-80v-240 240Zm664 200L720-303v123h-80v-260h260v80H776l144 144-56 56Z" />
  </svg>
)

export { IconVariableInsertOutlined as default }
