import React from 'react'
import { IconProps } from './types.js'

export const IconLiquorSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-80h80v-128q-35-12-57.5-42.5T120-400v-320h240v320q0 39-22.5 69.5T280-288v128h80v80H120Zm80-440h80v-120h-80v120ZM440-80v-518l120-44v-238h200v238l120 44v518H440Zm200-680h40v-40h-40v40ZM520-480h280v-62l-120-44v-94h-40v94l-120 44v62Zm0 320h280v-80H520v80Z" />
  </svg>
)
