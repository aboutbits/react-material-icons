import React from 'react'
import { IconProps } from './types'

export const IconNoEncryptionOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m800-274-80-80v-206H514l-80-80h166v-80q0-50-34.5-85T481-840q-50 0-84 34.5T363-720v9l-73-73q22-61 75-98.5T481-920q83 0 141 58.5T680-720v80h40q33 0 56.5 23.5T800-560v286Zm20 246-62-62q-11 5-20 7.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-25 14.5-46t37.5-30L28-820l56-56L876-84l-56 56ZM686-160 539-309q-11 11-25.5 17t-31.5 6q-33 0-56.5-23.5T402-366q0-17 6-31.5t17-25.5L286-560h-46v400h446ZM486-360Zm131-97Z" />
  </svg>
)
