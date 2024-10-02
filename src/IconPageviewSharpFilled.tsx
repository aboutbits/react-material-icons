import React from 'react'
import { IconProps } from './types'

export const IconPageviewSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-400q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM80-160v-640h800v640h-24L612-404q14-21 21-45t7-51q0-75-52.5-127.5T460-680q-75 0-127.5 52.5T280-500q0 75 52.5 127.5T460-320q26 0 50.5-7t45.5-21l188 188H80Z" />
  </svg>
)
