import React from 'react'
import { IconProps } from './types'

const IconSerifOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M248-240h104v-13h-51l53-147h134l50 147h-48v13h222v-13h-31L509-720h-55L280-253h-32v13Zm112-175 64-178 59 178H360ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)

export { IconSerifOutlined as default }