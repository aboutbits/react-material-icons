import React from 'react'
import { IconProps } from './types'

export const IconPhoneLockedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-560v-200h40v-40q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-840q-17 0-28.5 11.5T680-800v40Zm118 640q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
  </svg>
)
