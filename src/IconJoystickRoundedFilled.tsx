import React from 'react'
import { IconProps } from './types.js'

export const IconJoystickRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-629v-17q-44-13-72-49.5T340-780q0-58 41-99t99-41q58 0 99 41t41 99q0 48-28 84.5T520-646v17l280 161q19 11 29.5 29.5T840-398v76q0 22-10.5 40.5T800-252L520-91q-19 11-40 11t-40-11L160-252q-19-11-29.5-29.5T120-322v-76q0-22 10.5-40.5T160-468l280-161ZM272-440l208 120 208-120-168-97v137h-80v-137l-168 97Z" />
  </svg>
)