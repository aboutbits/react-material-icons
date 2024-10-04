import React from 'react'
import { IconProps } from './types.js'

export const IconHandGestureOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m840-234-80-80v-446q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v526ZM360-714l-80-80v-6q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v86Zm160 160-80-80v-246q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v326Zm160 75h-80v-361q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v361Zm37 349L360-487v252l-158-79 177 176q8 7 16 12.5t18 5.5h267q10 0 19.5-2.5T717-130ZM413-40q-24 0-46-9t-39-26L39-364l54-43q18-14 41-16.5t44 8.5l102 50v-202L27-820l57-57L876-85l-57 57-44-44q-20 15-44 23.5T680-40H413Zm187-439Zm280-280q0-51-35-86t-86-35v-60q75 0 128 53t53 128h-60ZM240-40q-83 0-141.5-58.5T40-240h60q0 58 41 99t99 41v60Zm304-264Z" />
  </svg>
)
