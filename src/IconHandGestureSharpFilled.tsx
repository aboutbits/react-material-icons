import React from 'react'
import { IconProps } from './types'

export const IconHandGestureSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-759q0-51-35-86t-86-35v-60q75 0 128 53t53 128h-60ZM240-40q-83 0-141.5-58.5T40-240h60q0 58 41 99t99 41v60Zm99 0L48-465l69-66 163 114v-423h80v360h80v-440h80v440h80v-400h80v400h80v-320h80v760H339Z" />
  </svg>
)
