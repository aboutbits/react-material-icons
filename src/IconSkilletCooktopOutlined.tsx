import React from 'react'
import { IconProps } from './types'

const IconSkilletCooktopOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360q-50 0-85-35t-35-85v-160h521q5-33 27-59t54-37l185-62 25 76-185 62q-12 4-19.5 14.5T720-622v142q0 50-35 85t-85 35H240Zm0-80h360q17 0 28.5-11.5T640-480v-80H200v80q0 17 11.5 28.5T240-440Zm120 320v-120H80v-80h280q33 0 56.5 23.5T440-240v120h-80Zm160 0v-120q0-33 23.5-56.5T600-320h280v80H600v120h-80ZM420-500Z" />
  </svg>
)

export { IconSkilletCooktopOutlined as default }