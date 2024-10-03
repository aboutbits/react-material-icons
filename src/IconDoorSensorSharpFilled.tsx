import React from 'react'
import { IconProps } from './types.js'

export const IconDoorSensorSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-160h280v-160H280v-400h400v720H280ZM160-320v-80h360v80H160Zm320-240q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm280-40v-240h80v240h-80Z" />
  </svg>
)
