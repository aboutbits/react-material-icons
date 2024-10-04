import React from 'react'
import { IconProps } from './types.js'

export const IconFilter9PlusOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-400h80q33 0 56.5-23.5T560-480v-160q0-33-23.5-56.5T480-720h-40q-33 0-56.5 23.5T360-640v40q0 33 23.5 56.5T440-520h40v40h-80v80Zm80-200h-40v-40h40v40ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm500-360h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
)