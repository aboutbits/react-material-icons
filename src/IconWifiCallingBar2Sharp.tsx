import React from 'react'
import { IconProps } from './types.js'

export const IconWifiCallingBar2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-521q-17 0-28.5-11.5T620-561q0-17 11.5-28.5T660-601q17 0 28.5 11.5T700-561q0 17-11.5 28.5T660-521Zm-100-98-42-42q29-29 65.5-44.5T660-721q40 0 76.5 15.5T802-661l-42 42q-20-20-45.5-31T660-661q-29 0-54.5 11T560-619Zm238 499q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
  </svg>
)
