import React from 'react'
import { IconProps } from './types'

export const IconPrintDisabledOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-55-71-71v6H240v-160H80v-240q0-51 35-85.5t85-34.5h6L55-791l57-57 736 736-57 57ZM320-200h320v-6L486-360H320v160Zm474-80-80-80h86v-160q0-17-11.5-28.5T760-560H514l-80-80h326q51 0 85.5 34.5T880-520v240h-86Zm-634-80h80v-80h166L286-560h-86q-17 0-28.5 11.5T160-520v160Zm480-280v-120H314l-80-80h486v200h-80Zm80 180q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM200-560h86-126 40Zm560 0h40-286 246Z" />
  </svg>
)
