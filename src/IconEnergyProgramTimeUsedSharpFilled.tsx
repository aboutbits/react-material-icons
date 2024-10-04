import React from 'react'
import { IconProps } from './types'

const IconEnergyProgramTimeUsedSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-480q-30 0-59-9t-54-26l-44 41-55-55 44-44q-16-24-24-51t-8-56q0-83 58.5-141.5T720-880h200v200q0 83-58.5 141.5T720-480Zm-33-115 112-112-57-56-111 111 56 57ZM40-80v-720h400v400h320v320H40Zm160-160h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160Z" />
  </svg>
)

export { IconEnergyProgramTimeUsedSharpFilled as default }
