import React from 'react'
import { IconProps } from './types.js'

export const IconEarlyOnOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-30-280v-80h60v80h-60Zm0 400v-80h60V0h-60Zm165-333-43-42 57-57 42 43-56 56ZM531-49l-42-42 57-57 42 42-57 57Zm309-161v-60h80v60h-80Zm-400 0v-60h80v60h-80ZM829-49l-56-57 42-42 57 56-43 43ZM545-332l-56-57 42-42 57 56-43 43ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v160H200v400h160v80H200Zm0-560h560v-80H200v80Zm0 0v-80 80Z" />
  </svg>
)
