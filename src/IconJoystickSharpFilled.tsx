import React from 'react'
import { IconProps } from './types.js'

export const IconJoystickSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-629v-17q-44-13-72-49.5T340-780q0-58 41-99t99-41q58 0 99 41t41 99q0 48-28 84.5T520-646v17l320 184v170L520-91q-19 11-40 11t-40-11L120-275v-170l320-184ZM272-440l208 120 208-120-168-97v137h-80v-137l-168 97Z" />
  </svg>
)