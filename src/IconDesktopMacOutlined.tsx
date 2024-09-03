import React from 'react'
import { IconProps } from './types'

const IconDesktopMacOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-40l80-80H160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H560l80 80v40H320ZM160-440h640v-320H160v320Zm0 0v-320 320Z" />
  </svg>
)

export { IconDesktopMacOutlined as default }
