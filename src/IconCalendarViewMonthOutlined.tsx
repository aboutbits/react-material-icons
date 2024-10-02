import React from 'react'
import { IconProps } from './types'

export const IconCalendarViewMonthOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-360h160v-200H160v200Zm240 0h160v-200H400v200Zm240 0h160v-200H640v200ZM320-240v-200H160v200h160Zm80 0h160v-200H400v200Zm240 0h160v-200H640v200Z" />
  </svg>
)
