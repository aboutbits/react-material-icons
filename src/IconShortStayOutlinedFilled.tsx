import React from 'react'
import { IconProps } from './types.js'

export const IconShortStayOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-600q-33 0-56.5-23.5T300-680q0-33 23.5-56.5T380-760q33 0 56.5 23.5T460-680q0 33-23.5 56.5T380-600ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h360q33 0 56.5 23.5T640-800v243q-22 3-42 9.5T560-533v-267H200v261q18-11 38-16t42-5h286v24q-51 23-88.5 62T420-384v-56h-80v80h-80v80h80v80h72q10 35 28 66t44 54H200Z" />
  </svg>
)
