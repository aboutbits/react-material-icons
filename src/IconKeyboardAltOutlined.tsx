import React from 'react'
import { IconProps } from './types'

const IconKeyboardAltOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-520q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v520q0 33-23.5 56.5T840-120H120Zm0-80h720v-520H120v520Zm200-80h320v-40H320v40ZM200-400h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-200v-520 520Z" />
  </svg>
)

export { IconKeyboardAltOutlined as default }
