import React from 'react'
import { IconProps } from './types'

export const IconEmojiFoodBeverageOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-480h320-400 80Zm400 120h80v-120h-80v120ZM560-360q33 0 56.5-23.5T640-440v-320H400v16l72 58q2 2 8 16v170q0 8-6 14t-14 6H300q-8 0-14-6t-6-14v-170q0-2 8-16l72-58v-16H240v320q0 33 23.5 56.5T320-360h240ZM360-760h40-40Z" />
  </svg>
)
