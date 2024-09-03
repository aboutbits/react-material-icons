import React from 'react'
import { IconProps } from './types'

const IconKeyboardOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M794-59 59-794l57-57 735 735-57 57ZM320-320h327l-80-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm360 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm360 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM80-200v-560h127l560 560H80Zm800 1L640-441v-79h-80l-40-41v-79h-79L321-760h559v561Z" />
  </svg>
)

export { IconKeyboardOffSharpFilled as default }
