import React from 'react'
import { IconProps } from './types'

const IconSerifRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-253h-26l-6 7q0 2 6 6h92l6-6q0-3-1.5-5t-4.5-2h-45l53-147h134l50 147h-42l-6 7q0 2 6 6h210l6-6q0-3-1.5-5t-4.5-2h-25L515-703q-3-8-9.5-12.5T491-720h-19q-8 0-15 4.5T447-703L280-253Zm80-162 64-178 59 178H360ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)

export { IconSerifRounded as default }