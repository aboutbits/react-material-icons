import React from 'react'
import { IconProps } from './types.js'

export const IconWifiCallingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358Zm61-298L439-762q50-38 107-58t114-20q56 0 112.5 20.5T880-760L660-540Zm0-114 89-88q-18-9-40.5-13.5T660-760q-27 0-49.5 4.5T570-743l90 89Zm0 0Z" />
  </svg>
)
