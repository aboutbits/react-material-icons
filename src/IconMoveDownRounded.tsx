import React from 'react'
import { IconProps } from './types.js'

export const IconMoveDownRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-520q0 72 46 127t117 69l-31-31q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l103 103q12 12 12 28t-12 28L308-148q-11 11-28 11t-29-12q-11-11-11-27t11-28l36-38q-106-12-176.5-91.5T40-520q0-117 81.5-198.5T320-800h80q17 0 28.5 11.5T440-760q0 17-11.5 28.5T400-720h-80q-83 0-141.5 58.5T120-520Zm440 360q-17 0-28.5-11.5T520-200v-200q0-17 11.5-28.5T560-440h280q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H560Zm0-360q-17 0-28.5-11.5T520-560v-200q0-17 11.5-28.5T560-800h280q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H560Zm40-80h200v-120H600v120Z" />
  </svg>
)
