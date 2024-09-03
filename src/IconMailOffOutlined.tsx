import React from 'react'
import { IconProps } from './types'

const IconMailOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M383-463Zm194-34ZM791-55 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446L55-791l57-57 736 736-57 57Zm80-148-71-71v-366L575-499l-49-49 274-172H354l-80-80h526q33 0 56.5 23.5T880-720v480q0 10-2 19.5t-7 17.5Z" />
  </svg>
)

export { IconMailOffOutlined as default }