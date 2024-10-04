import React from 'react'
import { IconProps } from './types'

const IconFolderZipRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm400-80h80v-80h80v-80h-80v-80h80v-80h-80v-80h-80v80h80v80h-80v80h80v80h-80v80Z" />
  </svg>
)

export { IconFolderZipRoundedFilled as default }
