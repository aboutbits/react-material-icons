import React from 'react'
import { IconProps } from './types'

export const IconShortStaySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-600q-33 0-56.5-23.5T300-680q0-33 23.5-56.5T380-760q33 0 56.5 23.5T460-680q0 33-23.5 56.5T380-600ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87ZM120-80v-800h520v323q-22 3-42 9.5T560-533v-267H200v240h366v24q-51 23-88.5 62T420-384v-56h-80v80h-80v80h80v80h72q10 35 28 66t44 54H120Z" />
  </svg>
)
