import React from 'react'
import { IconProps } from './types'

export const IconTabCloseInactiveSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-80v-80h160v80H560Zm-240 0v-80h160v80H320ZM160-560H80v-160h80v160Zm0 240H80v-160h80v160Zm80 240H80v-160h80v80h80v80Zm236-340 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM240-240v-640h640v640H240Z" />
  </svg>
)
