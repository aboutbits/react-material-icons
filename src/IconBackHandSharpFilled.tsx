import React from 'react'
import { IconProps } from './types.js'

export const IconBackHandSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M512-40q-82 0-154-37.5T240-182L48-464l67-67 165 114v-423h80v360h80v-440h80v440h80v-400h80v400h80v-320h80v432q0 137-95.5 232.5T512-40Z" />
  </svg>
)
