import React from 'react'
import { IconProps } from './types.js'

export const IconLiquorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-80h80v-128q-35-12-57.5-42.5T120-400v-320h240v320q0 39-22.5 69.5T280-288v128h80v80H120Zm80-440h80v-120h-80v120Zm40 160q17 0 28.5-11.5T280-400v-40h-80v40q0 17 11.5 28.5T240-360ZM440-80v-518l120-44v-238h200v238l120 44v518H440Zm200-680h40v-40h-40v40ZM520-480h280v-62l-120-44v-94h-40v94l-120 44v62Zm0 320h280v-80H520v80Zm0-160h280v-80H520v80ZM240-440Zm280 120v-80 80Z" />
  </svg>
)
