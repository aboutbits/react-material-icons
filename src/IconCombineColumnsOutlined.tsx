import React from 'react'
import { IconProps } from './types'

const IconCombineColumnsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-80-120Zm240 0ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v80h-80v-80H200v560h160v-80h80v80q0 33-23.5 56.5T360-120H200Zm400 0q-33 0-56.5-23.5T520-200v-80h80v80h160v-560H600v80h-80v-80q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Z" />
  </svg>
)

export { IconCombineColumnsOutlined as default }