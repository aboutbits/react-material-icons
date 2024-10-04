import React from 'react'
import { IconProps } from './types.js'

export const IconRouterRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h400v-120q0-17 11.5-28.5T640-600q17 0 28.5 11.5T680-560v120h80q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm80-40q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm140 0q17 0 28.5-11.5T460-280q0-17-11.5-28.5T420-320q-17 0-28.5 11.5T380-280q0 17 11.5 28.5T420-240Zm140 0q17 0 28.5-11.5T600-280q0-17-11.5-28.5T560-320q-17 0-28.5 11.5T520-280q0 17 11.5 28.5T560-240Zm80-420q-11 0-20 2t-18 6q-16 7-32.5 6T541-659q-12-12-11.5-29t14.5-25q21-13 45.5-20t50.5-7q27 0 51 7t45 20q14 8 14.5 25T739-659q-12 12-29 13t-33-6q-8-4-17.5-6t-19.5-2Zm0-140q-39 0-74.5 11.5T500-755q-14 10-30.5 9T442-758q-12-12-12-28t13-26q41-32 91-50t106-18q56 0 106 18t91 50q13 10 13 26t-12 28q-11 11-27.5 12t-30.5-9q-30-22-65.5-33.5T640-800ZM200-200v-160 160Z" />
  </svg>
)
