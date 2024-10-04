import React from 'react'
import { IconProps } from './types.js'

export const IconMoveUpRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160q-117 0-198.5-81.5T40-440q0-107 70.5-186.5T287-718l-36-38q-11-12-11-28t11-27q12-12 29-12t28 11l104 104q12 12 12 28t-12 28L309-549q-12 12-28.5 12T252-549q-11-12-11-28.5t11-27.5l31-31q-71 14-117 69t-46 127q0 83 58.5 141.5T320-240h80q17 0 28.5 11.5T440-200q0 17-11.5 28.5T400-160h-80Zm240-360q-17 0-28.5-11.5T520-560v-200q0-17 11.5-28.5T560-800h280q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H560Zm0 360q-17 0-28.5-11.5T520-200v-200q0-17 11.5-28.5T560-440h280q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H560Zm40-80h200v-120H600v120Z" />
  </svg>
)