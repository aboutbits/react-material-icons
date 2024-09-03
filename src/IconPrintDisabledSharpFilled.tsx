import React from 'react'
import { IconProps } from './types'

const IconPrintDisabledSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-55-71-71v6H240v-160H80v-360h126L55-791l57-57 736 736-57 57ZM320-200h320v-6L486-360H320v160Zm474-80L434-640h446v360h-86Zm-74-400H394L234-840h486v160Zm0 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Z" />
  </svg>
)

export { IconPrintDisabledSharpFilled as default }
