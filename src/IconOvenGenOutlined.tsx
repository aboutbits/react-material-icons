import React from 'react'
import { IconProps } from './types'

const IconOvenGenOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-360v280h560v-280h-80v200H280v-200h-80Zm160 120h240v-120H360v120ZM200-560h560v-200H200v200Zm120-80q-17 0-28.5-11.5T280-680q0-17 11.5-28.5T320-720q17 0 28.5 11.5T360-680q0 17-11.5 28.5T320-640Zm160 0q-17 0-28.5-11.5T440-680q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680q0 17-11.5 28.5T480-640Zm160 0q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720q17 0 28.5 11.5T680-680q0 17-11.5 28.5T640-640Z" />
  </svg>
)

export { IconOvenGenOutlined as default }