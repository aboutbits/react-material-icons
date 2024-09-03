import React from 'react'
import { IconProps } from './types'

const IconPropaneTankSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80q-66 0-113-47t-47-113v-320q0-57 34-99t86-56v-165h400v165q52 14 86 56t34 99v320q0 66-47 113T640-80H320Zm-80-360h480v-120q0-33-23.5-56.5T640-640H320q-33 0-56.5 23.5T240-560v120Zm80 280h320q33 0 56.5-23.5T720-240v-120H240v120q0 33 23.5 56.5T320-160Zm160-280Zm0 80Zm0-40Zm40-320h80v-80H360v80h80v-40h80v40Z" />
  </svg>
)

export { IconPropaneTankSharp as default }
