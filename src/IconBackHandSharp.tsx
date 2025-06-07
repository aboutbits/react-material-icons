import React from 'react'
import { IconProps } from './types.js'

export const IconBackHandSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M512-40q-82 0-154-37.5T240-182L48-464l67-67 165 114v-423h80v577L212-366l95 138q35 51 89 79.5T512-120q103 0 175.5-72.5T760-368v-432h80v432q0 137-95.5 232.5T512-40Zm-72-440v-440h80v440h-80Zm160 0v-400h80v400h-80ZM486-300Z" />
  </svg>
)
