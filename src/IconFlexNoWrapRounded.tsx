import React from 'react'
import { IconProps } from './types'

const IconFlexNoWrapRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-320v-320q0-17 11.5-28.5T80-680h160q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280H80q-17 0-28.5-11.5T40-320Zm320 0v-320q0-17 11.5-28.5T400-680h160q17 0 28.5 11.5T600-640v320q0 17-11.5 28.5T560-280H400q-17 0-28.5-11.5T360-320Zm320 0v-320q0-17 11.5-28.5T720-680h160q17 0 28.5 11.5T920-640v320q0 17-11.5 28.5T880-280H720q-17 0-28.5-11.5T680-320Zm-560-40h80v-240h-80v240Zm640 0h80v-240h-80v240Z" />
  </svg>
)

export { IconFlexNoWrapRounded as default }
