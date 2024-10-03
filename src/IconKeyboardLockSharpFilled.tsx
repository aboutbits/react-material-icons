import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardLockSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80v-200h40v-40q0-33 23.5-56.5T760-400q33 0 56.5 23.5T840-320v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320v40ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM80-200v-560h800v320q-26-20-57-30t-63-10v-40h-80v57q-24 11-44 27t-36 36H320v80h244q-2 10-3 19.5t-1 20.5v80H80Z" />
  </svg>
)
