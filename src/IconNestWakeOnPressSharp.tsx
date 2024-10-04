import React from 'react'
import { IconProps } from './types'

const IconNestWakeOnPressSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-440v-360h120v360H760ZM268-120 40-351l85-87 115 24v-326q0-42 29-71t71-29q42 0 71 29t29 71v180h34l215 95-59 345H268Zm34-80h261l37-218-170-75h-70v-247q0-9-5.5-14.5T340-760q-9 0-14.5 5.5T320-740v424l-167-35 149 151Zm0 0h261-261Z" />
  </svg>
)

export { IconNestWakeOnPressSharp as default }
