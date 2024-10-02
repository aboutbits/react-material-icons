import React from 'react'
import { IconProps } from './types'

export const IconGif2RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h200q17 0 28.5 11.5T400-640q0 17-11.5 28.5T360-600H160v240h160v-80h-40q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h80q17 0 28.5 11.5T400-480v120q0 33-23.5 56.5T320-280H160Zm320-40v-320q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v320q0 17-11.5 28.5T520-280q-17 0-28.5-11.5T480-320Zm160 0v-320q0-17 11.5-28.5T680-680h200q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600H720v80h120q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H720v120q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320Z" />
  </svg>
)
