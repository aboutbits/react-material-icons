import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M794-59 59-794l57-57 735 735-57 57ZM320-320v-80h247l80 80H320ZM200-440v-80h80v80h-80Zm120 0v-80h80v80h-80Zm360 0v-80h80v80h-80ZM200-560v-80h80v80h-80Zm360 0v-80h80v80h-80Zm120 0v-80h80v80h-80Zm176 337-56-57v-400H401l-80-80h479q33 0 56.5 23.5T880-680v401q0 17-6.5 31T856-223Zm-696 23q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h47l80 80H160v400h527l80 80H160Zm281-440h79v79l-79-79Zm119 120h80v79l-80-79Zm-187 40Zm227 0Z" />
  </svg>
)
