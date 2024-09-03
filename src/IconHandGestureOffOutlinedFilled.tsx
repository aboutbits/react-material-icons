import React from 'react'
import { IconProps } from './types'

const IconHandGestureOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-714-80-80v-6q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v86Zm160 160-80-80v-246q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v326ZM413-40q-29 0-54-15.5T313-92L39-364l55-43q18-14 41-17t44 8l101 51v-202L27-820l57-57L876-85l-57 57-44-44q-20 15-44 23.5T680-40H413Zm467-719q0-51-35-86t-86-35v-60q75 0 128 53t53 128h-60ZM240-40q-83 0-141.5-58.5T40-240h60q0 58 41 99t99 41v60Zm600-194L600-473v-367q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v367h80v-287q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v526Z" />
  </svg>
)

export { IconHandGestureOffOutlinedFilled as default }
